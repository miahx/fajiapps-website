import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "FajiApp - One Idea. Two Apps. One Seamless Marketplace.",
  description:
    "FajiBuy & FajiBusiness - Bringing neighbors together, one conversation at a time. Coming October 1, 2025.",
  keywords: "FajiApp, FajiBuy, FajiBusiness, local marketplace, chat with vendors, mobile app",
  authors: [{ name: "FajiApp Team" }],
  openGraph: {
    title: "FajiApp - One Idea. Two Apps. One Seamless Marketplace.",
    description: "FajiBuy & FajiBusiness - Bringing neighbors together, one conversation at a time.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FajiApp - One Idea. Two Apps. One Seamless Marketplace.",
    description: "FajiBuy & FajiBusiness - Bringing neighbors together, one conversation at a time.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
