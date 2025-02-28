import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SkinGlow - Natural Organic Skincare Products",
  description: "Discover your natural beauty with our organic skincare products. SkinGlow offers premium quality, eco-friendly skincare solutions.",
  keywords: "skincare, organic, natural, eco-friendly, beauty products, skin glow",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}