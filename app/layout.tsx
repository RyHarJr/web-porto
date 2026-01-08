import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const DOMAIN_URL = process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN_URL),

  title: {
    default: "Professional Web Agency",
    template: "%s | Professional Web Agency",
  },

  description: "Modern web development services for your business.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: DOMAIN_URL,
  },

  icons: {
    icon: "/images/logo.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: DOMAIN_URL,
    title: "Professional Web Agency",
    description: "Modern web development services for your business.",
    siteName: "Professional Web Agency",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Professional Web Agency",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased text-foreground", inter.variable, plusJakarta.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
