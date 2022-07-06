import Header from '../components/Header'
import styles from '../styles/AboutPage.module.css'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function About() {
    return (
      <>
      <main className={styles.main}>
      <Header />
      <h1>You can reach me on: 96651446</h1>
      </main>
      
      </>
    )
}

export const getServerSideProps = withPageAuthRequired();
