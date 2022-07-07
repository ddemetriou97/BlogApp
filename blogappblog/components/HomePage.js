import styles from '../styles/HomePage.module.css'
import Link from 'next/link'


export default function HomePage({ title, description, backgroundImage})
{
    return (
         
        <div className={styles.backgroundImage}>
            <div className={styles.details}>
                <h1>{title}</h1>
                <h3>{description}</h3>
                <Link href="/allPosts">
                <button>Go to posts</button>
                </Link>
            </div>
        </div>

    )
}