import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse, type NextRequest } from "next/server";

const rateLimit = new Map();

function rateLimiter(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for"); //|| req.ip; <-- Dejó de funcionar
  const now = Date.now();

  if (rateLimit.has(ip)) {
    const { count, lastRequest } = rateLimit.get(ip);
    if (now - lastRequest < 1000) {
      // 1 segundo de intervalo mínimo
      if (count >= 10) {
        // Máximo 10 peticiones por segundo
        return new NextResponse("Too many requests", { status: 429 });
      }
      rateLimit.set(ip, { count: count + 1, lastRequest: now });
    } else {
      rateLimit.set(ip, { count: 1, lastRequest: now });
    }
  } else {
    rateLimit.set(ip, { count: 1, lastRequest: now });
  }

  return null;
}

export default function middleware(req: NextRequest) {
  const response = rateLimiter(req);

  if (response) {
    return response;
  }

  const pathname = req.nextUrl.pathname;

  // Si la ruta no coincide con ningún idioma soportado, devuelve un 404
  if (
    !pathname.startsWith("/en") &&
    !pathname.startsWith("/es") &&
    pathname !== "/"
  ) {
    return NextResponse.redirect(new URL("/not-found", req.url));
  }

  // Middleware de next-intl
  return createMiddleware(routing)(req);
}

export const config = {
  matcher: ["/", "/(en|es)/:path*", "/api/:path*"],
};
