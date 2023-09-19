import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'

const clash = localFont({
  src: [
    {
      path: '../assets/fonts/clash_display/ClashDisplay-ExtraLight.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/clash_display/ClashDisplay-Light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/clash_display/ClashDisplay-Medium.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/clash_display/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/clash_display/ClashDisplay-Semibold.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/clash_display/ClashDisplay-Bold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={clash.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
