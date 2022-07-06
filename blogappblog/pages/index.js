import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import HomePage from '../components/HomePage'
import { client } from '../prismicConfig'
import convertPrismicHPToReadable from '../convertPrismicHPToReadable'

export async function getStaticProps(context) {

  const blogPosts = await client.getAllByType('homepage')

  const posts = blogPosts.map(convertPrismicHPToReadable)

  //console.log("Posts:" + JSON.stringify(posts))

  return {
    props: {
      posts,
      revalidata: 86400
    }
  }
}

export default function Home({posts}) {
 
  return (
    <>
      <Head>
        <title>The Lude Blog</title>
      </Head>
      <main className={styles.main}>
        <Header></Header>
      {
        posts.map(p => (
          <div className={styles.post} key={p.slug}>
            <HomePage {...p} />
          </div>
        ))
        }
      </main>
    </>
  )
}
