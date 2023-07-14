import '@/styles/globals.css'
import Card from '@/components/card'
import type { AppProps } from 'next/app'
import { faktPro } from '@/styles/fonts'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={`${faktPro.className} [perspective:1200px]`}>
      <Card>
        <Component {...pageProps} key={router.asPath} />
      </Card>
    </div>
  )
}
