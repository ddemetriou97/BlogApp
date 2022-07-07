import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/allPosts.module.css'
import BlogPostArticleLink from '../components/BlogPostArticleLink'
import { client } from '../prismicConfig'
import convertPrismicDataToReadable from '../convertPrismicDataToReadable'

export async function getStaticProps(context) {
  
  const blogPosts = await client.getAllByType('blog-post')

  const posts = blogPosts.map(convertPrismicDataToReadable)
  
  return {
    props: {
      posts,
      revalidata: 86400
    }
  }
}

export default function allPosts({posts}) {
  
  return (
    <>
      <Head>
        <title>All posts</title>
      </Head>

      <main className={styles.main}>
        <Header></Header>
        
    <h1 className={styles.title}>All posts</h1>

    {
        posts.map(p => (
          <div className={styles.post} key={p.slug}>
            <BlogPostArticleLink {...p} />
          </div>
        ))
        }

      
      </main>
    </>
  )
}
