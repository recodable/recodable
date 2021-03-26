import '../styles/index.css'
import Head from 'next/head'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Recodable - independant development team</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32.ico"
        />
      </Head>

      <div className="w-full h-2 bg-primary" />

      <div>
        <Component {...pageProps} />
      </div>

      <Footer />

      <div className="w-full h-2 bg-green-400" />
    </>
  )
}

export default MyApp
