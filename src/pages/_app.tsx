import '@/styles/globals.css'
import Card from '@/components/card'
import type { AppProps } from 'next/app'
import { faktPro } from '@/styles/fonts'
import Head from 'next/head'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={`${faktPro.className} [perspective:1200px]`}>
      <Head>
        <title>Jed Hastwell</title>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <Card>
        <Component {...pageProps} key={router.asPath} />
      </Card>
    </div>
  )
}
