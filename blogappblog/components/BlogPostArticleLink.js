import styles from '../styles/BlogPostArticleLink.module.css'
import Link from 'next/link'
import formatDate from '../components/formatDate'

export default function BlogPostArticleLink({ slug, title , date})
{
    return (
        <article className={styles.post}>
            <Link href={slug}>
                <a className={styles.title}> 
                    {title}
                </a>
            </Link>  

            <datetime>{formatDate(date)}</datetime>
        </article>
        
    )
}