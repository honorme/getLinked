import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'

export const typohoop = localFont({
  src: [
    {
      path: '../assets/fonts/typo_hoop/Typo_Hoop_Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})
export const voces = localFont({
  src: [
    {
      path: '../assets/fonts/voces/Voces-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})
export const montserrat = localFont({
  src: [
    {
      path: '../assets/fonts/montserrat/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/montserrat/Montserrat-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/montserrat/Montserrat-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/montserrat/Montserrat-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})
export const volkhov = localFont({
  src: [
    {
      path: '../assets/fonts/volkhov/Volkhov-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})
export const clash = localFont({
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
