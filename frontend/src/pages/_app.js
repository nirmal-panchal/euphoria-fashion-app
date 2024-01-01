import '@/styles/globals.css'
import { Poppins } from 'next/font/google'
import Layout from '@/components/layout/Layout'

const poppins = Poppins({ weight: ['300', '400', '500', '600', '700', '800'], subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={poppins.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  )
}
