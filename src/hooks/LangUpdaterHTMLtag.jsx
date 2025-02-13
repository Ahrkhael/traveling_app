"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LangUpdaterHTMLtag() {
  const pathname = usePathname();

  useEffect(() => {
    const allowedLocales = ["en", "es"];
    const segments = pathname.split("/");
    const localeFromUrl = segments[1];

    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
      return null;
    };

    // Si el primer segmento es uno de los idiomas permitidos, se usa ese valor
    // Si no se obtiene el locale a partir de la cookie NEXT_LOCALE o se usa "en" por defecto.
    const locale = allowedLocales.includes(localeFromUrl)
      ? localeFromUrl
      : getCookie("NEXT_LOCALE") || "en";

    document.documentElement.lang = locale;
  }, [pathname]);

  return null;
}
