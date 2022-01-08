import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/layout'
import { useEffect } from 'react'
import Script from 'next/script'
function MyApp({ Component, pageProps }) {

  return (
    
    <Layout>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></Script>

      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
