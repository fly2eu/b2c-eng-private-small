import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/forms/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: 'Elide — Private European Tours for Indian & GCC Families',
    template: '%s | Elide Private European Tours',
  },
  description:
    'Private chauffeured European tours in a Mercedes fleet. Switzerland, France, Italy and more — designed for Indian and GCC families. Your vehicle, your pace, your family.',
  keywords: [
    'private europe tour',
    'europe tour from India',
    'switzerland private tour',
    'chauffeured europe vacation',
    'europe family tour package private',
    'private car europe tour',
    'europe tour from dubai',
    'mercedes private tour europe',
  ],
  openGraph: {
    siteName: 'Elide',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elide — Private European Tours',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@elidetours',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[#FAF7F0] antialiased">
        <Navbar />
        <main className="flex-1 pt-0">
          {children}
        </main>
        <Footer />
        <WhatsAppButton variant="float" />
      </body>
    </html>
  )
}
