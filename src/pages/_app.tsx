import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { PageProps } from '../models/page'

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <Layout title={pageProps.title} metaList={pageProps.metaList}>
      <Component {...pageProps} />
    </Layout>
  )
}
