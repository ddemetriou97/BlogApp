import { useMemo } from 'react'
import styles from '../styles/BlogPost.module.css'
import { marked } from 'marked'
import Link from 'next/link'

export default function BlogPost({ slug, title, content, isMainPage})
{
    const htmlContent = useMemo(() => marked(content), [content])

    return (
        <div className={styles.main}>
        <article className={styles.post}>
            {
                slug ? 
                (
                    <Link href={"/"+slug}>
                        <a>
                            {
                                isMainPage 
                                ? <h1 className={styles.title}>{title}</h1> 
                                : <h2 className={styles.title}>{title}</h2>
                            }
                        </a>
                    </Link>
                )
                :(
                isMainPage 
                ? <h1 className={styles.title}>{title}</h1> 
                : <h2 className={styles.title}>{title}</h2>
                )
            }
            
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: htmlContent}}>
            </div>

            
        </article>
        </div>
    )
}