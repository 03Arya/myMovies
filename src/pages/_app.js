// pages/_app.js
import '../styles/globals.css'
import '../style/darkmode.scss'
import useDarkMode from '@/hooks/useDarkmode'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp