import styles from '../styles/HomePage.module.css'
import Link from 'next/link'
import Image from 'next/image'
import backImage from '../components/backImage.jpg'

export default function HomePage({ title, description, backgroundImage})
{
    return (
        
        // <div className={styles.mainBackground}>
        //     <div class={styles.container}>
        //         <div className={styles.backgroundImage}>
        //         </div>
        //         <div class={styles.centered}>
        //             <h1>{title}</h1>
        //             <h3 className={styles.description}>{description}</h3>
        //         </div>
        //     </div>
                        
        // </div>
        
        <div className={styles.backgroundImage}>
            <div className={styles.details}>
                <h1>I am Demetris Demetriou</h1>
                <h3>And this is my blog</h3>
                <Link href="/allPosts">
                <button>Go to posts</button>
                </Link>
            </div>
        </div>

    )
}