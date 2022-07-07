import convertPrismicDataToReadable from 'convertPrismicDataToReadable'
import Header from '../components/Header'
import styles from '../styles/AboutPage.module.css'
import { client } from '../prismicConfig'
import BlogPost from 'components/BlogPost'
import convertPrismicHPToReadable from '../convertPrismicContactToReadable'
import HomePage from 'components/HomePage'

export async function getStaticProps(context) {

    const blogPosts = await client.getAllByType('contact')

   console.log(JSON.stringify(blogPosts))
  
    const posts = blogPosts.map(convertPrismicHPToReadable)
  
    console.log(posts)
    return {
      props: {
        posts,
        revalidata: 86400
      }
    }
  }

export default function About({posts}) {
    return (
      <>
      <main className={styles.main}>
      <Header />
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
