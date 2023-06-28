import localFont from 'next/font/local'
const faktPro = localFont({
  src: [
    {
      path: '../assets/fonts/fakt-pro-blond/fakt-pro-blond.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/fakt-pro-blond-italic/fakt-pro-blond-italic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../assets/fonts/fakt-pro-semi-bold/fakt-pro-semi-bold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})
export { faktPro }
