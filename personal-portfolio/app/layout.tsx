import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alex Morgan — Product Designer',
  description: 'Alex Morgan is an independent product designer crafting thoughtful digital experiences.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f2ed',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-paper"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
