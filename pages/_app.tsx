import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import '../styles/global.css'

import { Loader, Navbar } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      setIsLoading(true)
    });

    Router.events.on('routeChangeComplete', (url) => {
      setIsLoading(false)
    })

    Router.events.on('routeChangeError', (url) =>{
      setIsLoading(false)
    });
  
  }, [Router])
  

  return (
    <div>
      <Head>
        <title>Library</title>
      </Head>

      <main>
        <ThemeProvider attribute='class'>
          <Navbar />
          <div className="dark:bg-gray-900 bg-white">
            {isLoading ? <Loader /> : <Component {...pageProps} />}
          </div>
        </ThemeProvider>
      </main>
    </div>
  )
}

export default MyApp
