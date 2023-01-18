import Head from 'next/head'
import Image from 'next/image'
import css from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* <header className={css.header}>
        <h1>Welcome to the Travel Guide</h1>
      </header> */}
      <main className={css.main}>
        <section className={css.landing} >
          <nav className={css.nav}>
            <Link href='/destinations'>
              Destinations
            </Link>
            <Link href='/about'>
              About Us
            </Link>
            <Link href='/contact'>
              Contact Us
            </Link>
          </nav>
          <div className={css.landing_front}></div>
          <div className={css.landing_image}></div>
        </section>
        <section>
          <div>
            <h2>Featured Destinations</h2>
            <ul>
              <li>
                <Link href='/destinations/paris'>
                  Paris
                </Link>
              </li>
              <li>
                <Link href='/destinations/tokyo'>
                  Tokyo
                </Link>
              </li>
              <li>
                <Link href='/destinations/new-york-city'>
                  New York City
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Top Activities</h2>
            <ul>
              <li>Sightseeing</li>
              <li>Food Tasting</li>
              <li>Adventure Sports</li>
            </ul>
          </div>
        </section>
      </main>
      <footer className={css.footer}>
        <p>Copyright © 2021 Travel Guide</p>
      </footer>
    </div>
  )
}
