import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from "../src/components/navbar/index"
import Head from 'next/head'
import AuthContextprovider from '@/src/context/AuthContext'
import ShopContextProvider from '../src/context/ShopContext'
import { CartProvider } from '../src/context/CartContext/index'
import Footer from '@/src/components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <AuthContextprovider>  
      <ShopContextProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet" />
      </Head>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
    </ShopContextProvider> 
      </AuthContextprovider> 
    </CartProvider>
  )
  
}
