import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Organic Ads Technologies - Web Development, Digital Marketing & Business Messaging Solutions in Bangalore",
  description: "Top Google & Bing rankings in 4 hours! Expert web development, mobile apps, SEO, WhatsApp Business API, RCS messaging, bulk SMS, voice solutions & chatbot services in Bangalore, Karnataka. 500+ happy clients across 15+ countries.",
  keywords: [
    "web development bangalore",
    "digital marketing bangalore",
    "SEO services bangalore",
    "WhatsApp Business API",
    "RCS messaging",
    "bulk SMS service",
    "voice solutions",
    "chatbot development",
    "multi channel messaging",
    "Next.js development",
    "React development",
    "mobile app development",
    "Google rankings",
    "Bing rankings",
    "Nelamangala",
    "Karnataka"
  ],
  openGraph: {
    title: "Organic Ads Technologies - Digital Marketing & Messaging Solutions",
    description: "Achieve top Google & Bing rankings in 4 hours. Web development, SEO, WhatsApp API, RCS, SMS & voice solutions.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "fdD6fl5cXCKKEUwPxLxT1gXLOSeUDz0F5Pa1RrvSlB0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KDZZX9M3');`}
        </Script>

        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QQZXPCK2FW"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QQZXPCK2FW');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KDZZX9M3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
