import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import "bootstrap/dist/css/bootstrap.min.css";

import "@/app/styles/app.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Hind_Siliguri } from "@next/font/google";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import { CustomContainer, Nav } from "../utils/imports";
import colorPalette from "../theme/colors";
import DProvider from "../Redux/provider";

export default async function LocaleLayout({ children, params }) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${hindSiliguri.className}`}
        style={{ background: colorPalette.palette.lightBackground }}
      >
        <DProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {/* <Nav />`` */}
            <CustomContainer>
              {/* <SideNavbar /> */}
              {children}
            </CustomContainer>
          </NextIntlClientProvider>
        </DProvider>
      </body>
    </html>
  );
}
