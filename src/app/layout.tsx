import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ogImage from '../../public/facil.jpeg';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Facil Pay',
  description: 'Revolutionalizing Web3 Chat, Payment and DeFi Banking',
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      },
    ],
  },
  twitter: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      },
    ]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <div className="p-5">

          {children}
        </div>
      </body>
    </html>
  )
}
