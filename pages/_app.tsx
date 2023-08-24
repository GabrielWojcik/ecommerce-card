import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from "../src/components/navbar/index"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavBar></NavBar>
    <Component {...pageProps} />
    
    </>
  )
  
}
