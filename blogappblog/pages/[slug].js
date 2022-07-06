import Head from 'next/head'
import styles from '../styles/BlogPage.module.css'
import Header from '../components/Header'
import BlogPost from '../components/BlogPost'
import { client } from '../prismicConfig_copy'
import convertPrismicDataToReadable from '../convertPrismicDataToReadable'


export async function getStaticProps(context) {
  

  const data = await client.getByUID("blog-post", context.params.slug)

  //console.log(JSON.stringify(blogPost))
  //console.log(context)

  // const posts = blogPost.map(convertPrismicDataToReadable)
  
  // console.log(posts)

  return {
    props: {
      data: convertPrismicDataToReadable(data),
      revalidata: 86400
    }
  }
}

export async function getStaticPaths(){
  return{
    paths: [],
    fallback: 'blocking'
  }
}

export default function Home({ data }) {

    console.log("data: "+data)

    return (
      <>
        <Head>
          <title>The Lude Blog</title>
        </Head>
  
        <main className={styles.main}>
          <Header></Header>
          
            <div className={styles.post} >
              <BlogPost isMainPage {...data} />
            </div>
         
  
        
        </main>
      </>
    )
  }