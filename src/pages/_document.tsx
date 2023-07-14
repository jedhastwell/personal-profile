import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center bg-burnt-yellow dark:bg-zinc-700">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
