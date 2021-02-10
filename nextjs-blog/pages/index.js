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
        <p>
          Hello, I'm Amos. I'm a full stack engineer. You can contact me on 
          <a href="https://twitter.com/m_ogakadev">Twitter</a>.
        </p>
        <p>
          (This is a simple website - you'll be building a site like this on{' '}
          <a href="https://next.js/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}