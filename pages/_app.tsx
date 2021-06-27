
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'

// Style Modules
import '../styles/components/data-card.styles.scss'
import '../styles/index.styles.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
