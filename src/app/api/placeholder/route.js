import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import lqip from "lqip-modern";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const imagePath = searchParams.get("imagePath");

  if (!imagePath) {
    console.error("Error: Missing 'imagePath' parameter");
    return NextResponse.json(
      { error: "Falta el parámetro 'imagePath'" },
      { status: 400 }
    );
  }

  try {
    const absolutePath = path.join(process.cwd(), "public", imagePath);

    if (!fs.existsSync(absolutePath)) {
      console.error("Error: File does not exist at:", absolutePath);
      return NextResponse.json(
        { error: `La imagen ${imagePath} no existe.` },
        { status: 404 }
      );
    }

    const placeholder = await lqip(absolutePath);

    return NextResponse.json({ base64: placeholder.metadata.dataURIBase64 });
  } catch (error) {
    console.error("Error generating placeholder:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
