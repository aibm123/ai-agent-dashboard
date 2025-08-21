import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Agent & Dashboard',
  description: 'AI Agent & Dashboard với Next.js và TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="text-slate-800 bg-slate-100">
        {children}
      </body>
    </html>
  )
}
