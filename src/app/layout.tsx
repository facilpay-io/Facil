import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import i18nConfig from '@/app/i18nConfig';

const inter = Inter({ subsets: ['latin'] })

const ogImgUrl = "https://facil-team.gitbook.io/~gitbook/image?url=https:%2F%2F3438255478-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252Fpb2hZbkqaqzvJwq6nmtc%252Fuploads%252FVTaClwtfL1Xb4dLVQIPq%252FfacilPay%2520Square.png%3Falt=media%26token=da81ed28-8e88-4117-9c9e-16b452fc220a&width=768&dpr=4&quality=100&sign=d3120e92662befa890abc5c1bcd9862b0e977f793464515c3613cbffc8859ebd"

export const metadata: Metadata = {
  title: 'Facil Pay',
  description: 'Revolutionalizing Web3 Chat, Payment and DeFi Banking',
  metadataBase: new URL('https://www.facilpay.io/'),
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  return (
    <html lang={locale}>

      <body className={inter.className}>
        <div className="p-0">
          {children}
        </div>
      </body>

    </html>
  )
}
