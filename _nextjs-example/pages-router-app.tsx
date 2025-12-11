/**
 * Example: Pages Router Application Component
 * Location: pages/_app.tsx
 * 
 * This demonstrates how to integrate Vercel Speed Insights
 * into a Next.js Pages Router application (Next.js 12 and older).
 */

import type { AppProps } from 'next/app'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {/* SpeedInsights component - placed after the main component */}
      {/* Works automatically when deployed on Vercel */}
      <SpeedInsights />
    </>
  )
}
