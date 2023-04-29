import './globals.css'
import { Inter } from 'next/font/google'
import Providers from "@/app/providers";
import React from "react";


export default function RootLayout({
  children,

}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
