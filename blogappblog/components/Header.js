import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { useUser } from '@auth0/nextjs-auth0'

export default function Header(){
    const { user, error, isLoading } = useUser();

    console.log(user)

    if (user){
        return(<header className={styles.header}>
            <Link href="/">
                <a className={styles.title}>The Lude Blog</a>
            </Link>

            <div className={styles.menu}>
            <Link href="/allPosts">
                <a>Articles</a>
            </Link>  
            <Link href="/about">
                <a>About</a>
            </Link>         
            <Link href="/api/auth/logout">
                <a>Sign Out</a>
            </Link>
            <Link href="/Contact">
                <a>Contact</a>
            </Link>
            
           
            </div>
        </header>)
    }else{
        return(
            <header className={styles.header}>
                <Link href="/">
                    <a className={styles.title}>The Lude Blog</a>
                </Link>
    
                <div className={styles.menu}>
                <Link href="/allPosts">
                    <a>Articles</a>
                </Link>
    
               
                <Link href="/api/auth/login">
                    <a>Sign in</a>
                </Link>
                <Link href="/Contact">
                <a>Contact</a>
                </Link>
               
                </div>
            </header>
        )
    }

    
}