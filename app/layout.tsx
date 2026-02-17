import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })

export const metadata: Metadata = {
  title: "Ofimundo - Cotizaciones",
  description:
    "Encuentra el producto ideal para tu negocio. Impresoras, notebooks, scanners y monitores con las mejores marcas de tecnologia.",
}

export const viewport: Viewport = {
  themeColor: "#2e2096",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
