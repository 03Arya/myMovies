// pages/_app.js
import '../styles/globals.css'
import '../style/darkmode.scss'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp