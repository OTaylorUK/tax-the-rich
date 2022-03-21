import ColourPalette from '../comps/ColourPalette'
import Layout from '../comps/Layout'
import '../styles/global.css'

import Head from "next/head";

const MyApp = (props) => {
  const { Component, pageProps } = props;
  const { globalData: settings } = pageProps;

  const palette = settings.find(({ name }) => name === 'colourPalette')
 


  return (
    <Layout settings={settings}>
      <Head>
        <title>Home - Title</title>
        <link
            rel="preload"
            href="/fonts/Poppins-Regular.woff2"
            as="font"
            crossOrigin=""
        />
        <link
            rel="preload"
            href="/fonts/Poppins-Medium.woff2"
            as="font"
            crossOrigin=""
          />
			</Head>
      <Component {...pageProps} />
      <ColourPalette palette={palette} />
    </Layout>
  )
}



export default MyApp
