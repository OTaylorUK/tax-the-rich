import ColourPalette from '../components/ColourPalette'
import Layout from '../components/Layout'
import '../styles/global.css'

import Head from "next/head";
import { ThemeProvider } from '../context/theme'; 
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const MyApp = (props) => {
  const { Component, pageProps } = {...props};
  const { globalData: settings } = {...pageProps};

  const palette = settings?.find(({ name }) => name === 'colourPalette')
 


  const PageSEO = pageProps?.pageData?.[0]?.value?.[0]?.SEO
  const globalSEOData = settings?.find(({ name }) => name === 'siteSEO')
  const globalSEO = globalSEOData?.value?.[0]

  
  const siteName = globalSEO?.title ? globalSEO?.title : '';


  const SEO = {
    'title': PageSEO?.title ? `${PageSEO?.title} - ${siteName}` : globalSEO?.title,
    'description': PageSEO?.description ? PageSEO?.description : globalSEO?.generalCard?.description,
    'twitterHandle': globalSEO?.twitterCard?.twitterHandle ? globalSEO?.twitterCard?.twitterHandle : '',
    'twitterImage': PageSEO?.openGraphImage?.asset?.url ? PageSEO?.openGraphImage?.asset?.url : globalSEO?.twitterCard?.image?.asset?.url,
    'ogImage': PageSEO?.openGraphImage?.asset?.url ? PageSEO?.openGraphImage?.asset?.url : globalSEO?.generalCard?.image?.asset?.url,
    'homepage': globalSEO?.url ? globalSEO?.url : '',
    'url': PageSEO?.url ? PageSEO?.url : '',
  }


  const router = useRouter();


  useEffect(function sendGoatCounterEventsOnRoute() {
    const handleRouteChange = (path) => {
      window?.goatcounter?.count?.({
        path,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

 


  return (
    <ThemeProvider>
      <Layout settings={settings}>
        <Head>
          <title>{SEO?.title}</title>
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content={`@${SEO?.twitterHandle}`} />
          <meta name="twitter:creator" content={`@${SEO?.twitterHandle}`} />
          <meta property="og:url" content={SEO?.url} />
          <meta name="og:title" content={SEO?.title} />
          <meta name="og:description" content={SEO?.description} />
          <meta property="og:image" content={SEO?.ogImage} />
          <meta property="og:type" content="article" />
          <meta name="description" content={SEO?.description} />
          
          <link
              rel="preload"
              href="/fonts/Gaegu-Regular.woff2"
              as="font"
              type="font/woff2"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/Poppins-Regular.woff2"
              as="font"
              type="font/woff2"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/Poppins-Medium.woff2"
              as="font"
              type="font/woff2"
              crossOrigin=""
          />
          
        </Head>
        
        <Component {...pageProps} />
        <ColourPalette palette={palette} />

        <script 
          async
          data-goatcounter="https://tax-the-rich.goatcounter.com/count" 
          src="//gc.zgo.at/count.js"
          data-goatcounter-settings='{"no_onload": true}'
          strategy='afterInteractive'
        ></script>



      </Layout>

        
    </ThemeProvider>
  )
}



export default MyApp
