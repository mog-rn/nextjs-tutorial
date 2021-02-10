import Head from 'next/head'
import Layout, { siteTitle } from '../Components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a simple website - you'll be building a site like this on{' '}
          <a href="https://next.js/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}