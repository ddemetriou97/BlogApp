import '../styles/globals.css'
import Head from 'next/head'
import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <UserProvider>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    
    <Component {...pageProps} />
    </UserProvider>
    </>
  )

  
}

export default MyApp
