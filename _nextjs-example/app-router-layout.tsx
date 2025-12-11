/**
 * Example: Root Layout for Next.js 13.5+ with App Router
 * Location: app/layout.tsx
 * 
 * This demonstrates how to integrate Vercel Speed Insights
 * into a Next.js App Router application.
 */

import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A blog powered by Next.js and Contentlayer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional head content */}
      </head>
      <body>
        {children}
        {/* SpeedInsights component - placed after children */}
        {/* Works automatically when deployed on Vercel */}
        <SpeedInsights />
      </body>
    </html>
  )
}
