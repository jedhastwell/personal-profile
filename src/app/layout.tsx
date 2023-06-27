import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jed Hastwell',
  description: 'Personal profile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center bg-burnt-yellow dark:bg-zinc-700`}
      >
        {children}
      </body>
    </html>
  )
}
