import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getTranslations } from "next-intl/server";

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale");
  const t = await getTranslations({ locale, namespace: "Mail" });
  try {
    // Get email from body
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Falta el email" },
        { status: 400 }
      );
    }

    // Configure the SMTP with your env variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Mail information
    const mailOptions = {
      from: `"Viajeros Sin Fronteras" <${process.env.NEXT_PUBLIC_SMTP_USER}>`,
      to: email,
      subject: t("Title"),
      html: t.markup("Message", { p: (chunks) => `<p>${chunks}</p>` }),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
