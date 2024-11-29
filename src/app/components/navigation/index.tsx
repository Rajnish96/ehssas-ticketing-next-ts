"use client"
import Login from '@/(auth)/login/page'
import About from '@/about/page'
import Career from '@/career/page'
import Contact from '@/contact/page'
import Products from '@/products/page'
import Services from '@/services/page'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from "./styles.module.css";
import Home from '@/page'

const Navigation: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav>
      <Link href='/' className={pathname === "/" ? styles.active : ""}>
        <Home />
      </Link>
      <Link href='/about' className={pathname === "/about" ? styles.active : ""}>
        <About />
      </Link>
      <Link href='/services' className={pathname === "/services" ? styles.active : ""}>
        <Services />
      </Link>
      <Link href='/products' className={pathname === "/products" ? styles.active : ""}>
        <Products />
      </Link>
      <Link href='/career' className={pathname === "/career" ? styles.active : ""}>
        <Career />
      </Link>
      <Link href='/contact' className={pathname === "/contact" ? styles.active : ""}>
        <Contact />
      </Link>
      <Link href='/login' className={pathname === "/login" ? styles.active : ""}>
        <Login />
      </Link>
    </nav>
  )
}

export default Navigation