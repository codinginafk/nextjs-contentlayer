/**
 * Example: Client Component for Next.js < 13.5 (Without App Router)
 * Location: components/SpeedInsightsWrapper.tsx
 * 
 * For Next.js versions before 13.5, you need to create a client component
 * with the 'use client' directive and use usePathname() hook.
 */

'use client'

import { usePathname } from 'next/navigation'
import { SpeedInsights } from '@vercel/speed-insights/react'

export function SpeedInsightsWrapper() {
  const pathname = usePathname()

  return <SpeedInsights route={pathname} />
}
