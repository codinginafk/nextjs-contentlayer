# Vercel Speed Insights Implementation Guide

This directory contains example implementations of Vercel Speed Insights for different Next.js setups.

## Overview

Vercel Speed Insights is a real-time web performance monitoring solution that automatically collects Core Web Vitals and other performance metrics. It's integrated with Vercel deployments and provides actionable insights in your Vercel dashboard.

## Implementation Options

### Option 1: Next.js 13.5+ with App Router (Recommended)

**File**: `app-router-layout.tsx`  
**Location**: `app/layout.tsx` in your project

This is the modern approach and recommended for new projects.

```bash
# Install the package
npm install @vercel/speed-insights

# Or with other package managers
pnpm install @vercel/speed-insights
yarn add @vercel/speed-insights
bun add @vercel/speed-insights
```

**Implementation**:
```typescript
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### Option 2: Pages Router (Next.js 12 and older)

**File**: `pages-router-app.tsx`  
**Location**: `pages/_app.tsx` in your project

For projects using the older Pages Router pattern.

```typescript
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  )
}
```

### Option 3: Next.js < 13.5 (Without App Router)

**File**: `next13-client-component.tsx`  
**Location**: `components/SpeedInsightsWrapper.tsx`

For Next.js versions before 13.5 without App Router support, use the React import with route tracking.

1. Create the wrapper component:
```typescript
'use client'

import { usePathname } from 'next/navigation'
import { SpeedInsights } from '@vercel/speed-insights/react'

export function SpeedInsightsWrapper() {
  const pathname = usePathname()
  return <SpeedInsights route={pathname} />
}
```

2. Import in your layout/app:
```typescript
import { SpeedInsightsWrapper } from '@/components/SpeedInsightsWrapper'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsightsWrapper />
      </body>
    </html>
  )
}
```

## Step-by-Step Setup

### 1. Install the Package

Choose your package manager:

```bash
# npm
npm install @vercel/speed-insights

# pnpm
pnpm install @vercel/speed-insights

# yarn
yarn add @vercel/speed-insights

# bun
bun add @vercel/speed-insights
```

This adds `@vercel/speed-insights` to your `package.json` and updates your lock file.

### 2. Choose Your Implementation

Select based on your Next.js version and router type:

- **Next.js 13.5+** with App Router → Use `app-router-layout.tsx`
- **Next.js 12** with Pages Router → Use `pages-router-app.tsx`
- **Older Next.js** → Use `next13-client-component.tsx`

### 3. Add the Component

Copy the relevant implementation to your project:

**For App Router:**
- Replace `app/layout.tsx` with content from `app-router-layout.tsx`

**For Pages Router:**
- Replace `pages/_app.tsx` with content from `pages-router-app.tsx`

**For Client Component:**
- Create `components/SpeedInsightsWrapper.tsx` from `next13-client-component.tsx`
- Import it in your root layout or app component

### 4. Update Lock Files

After installing dependencies, commit your lock files:

```bash
# The appropriate lock file will be updated based on your package manager
# npm: package-lock.json
# pnpm: pnpm-lock.yaml
# yarn: yarn.lock
# bun: bun.lockb

git add package.json package-lock.json  # or yarn.lock / pnpm-lock.yaml
git commit -m "feat: Add Vercel Speed Insights"
```

### 5. Verify and Build

Ensure everything builds correctly:

```bash
npm run build
npm run lint  # if you have linting configured
```

### 6. Deploy to Vercel

Push to your Git repository and deploy on Vercel:

1. Push your changes to GitHub/GitLab/Bitbucket
2. Import your repository on [vercel.com](https://vercel.com)
3. Vercel automatically detects Next.js and builds your project
4. Speed Insights is enabled by default on Vercel deployments

## Monitoring Performance

After deployment, view your metrics:

1. Log in to [vercel.com](https://vercel.com)
2. Select your project
3. Go to "Analytics" tab
4. View real-time Core Web Vitals:
   - **LCP** (Largest Contentful Paint)
   - **FID** (First Input Delay) / **INP** (Interaction to Next Paint)
   - **CLS** (Cumulative Layout Shift)
   - **TTFB** (Time to First Byte)
5. Analyze performance trends and bottlenecks

## Key Features

- ✅ Automatic collection - No configuration needed
- ✅ Real-time data - Immediate insights
- ✅ Zero client-side overhead - Minimal performance impact
- ✅ Works everywhere - App Router, Pages Router, both supported
- ✅ Vercel integration - Direct dashboard access

## Important Notes

### Development Mode
- SpeedInsights only collects data when deployed on Vercel
- Development (`npm run dev`) is unaffected
- No need to see data locally

### Production Only
- Vercel detects production deployments
- Speed Insights automatically activates
- No code needed to enable/disable

### Privacy
- No personally identifiable information collected
- Compliant with privacy standards
- Data stored securely by Vercel

## Troubleshooting

### Speed Insights not showing data
- Ensure you're deployed on Vercel
- Wait a few minutes for data to appear
- Check that the component is in your layout

### Build errors
- Verify the correct import path for your Next.js version
- Ensure dependencies are installed: `npm install`
- Check Next.js version in `package.json`

### Import errors
- **App Router**: Use `@vercel/speed-insights/next`
- **Client Component**: Use `@vercel/speed-insights/react`
- **Pages Router**: Use `@vercel/speed-insights/next`

## Resources

- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Next.js Documentation](https://nextjs.org/docs)
- [Core Web Vitals](https://web.dev/vitals)
- [Vercel Dashboard](https://vercel.com/dashboard)

## Example Project Structure

For a complete Next.js + Contentlayer + Speed Insights project:

```
your-project/
├── app/
│   ├── layout.tsx           ← Add SpeedInsights here
│   ├── page.tsx
│   └── posts/
│       └── [slug]/
│           └── page.tsx
├── content/
│   └── posts/               ← Contentlayer content
│       ├── post-1.md
│       └── post-2.md
├── components/
│   └── Header.tsx
├── contentlayer.config.ts
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Next Steps

1. Choose your implementation option above
2. Install `@vercel/speed-insights`
3. Add the component to your layout/app
4. Build and test locally
5. Deploy to Vercel
6. Monitor performance in Vercel dashboard

Good luck! 🚀
