'use client'
import React, { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import styles from './menu.module.css';
import Link from 'next/link';

function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <header className={styles.header} ref={menuRef}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </div>
      <Link href="/" className={styles.logo}>
        Slotsa.se
      </Link>
      <nav className={`${styles['nav-container']} ${!isOpen ? styles.hidden : ''}`}>
        <div className={styles['link-container']}>
          <div className={styles['link-div']}><Link href="/nya-casinon">Nya casinon</Link></div>
          <div className={styles['link-div']}><Link href="/casino-med-bonus">Casino med bonus</Link></div>
          <div className={styles['link-div']}>
            <Link href="/casino-med-bonus-utan-omsattningskrav">Bonus utan omsättningskrav</Link>
          </div>
          <div className={styles['link-div']}><Link href="/casino-med-free-spins">Free spins</Link></div>
          <div className={styles['link-div']}><Link href="/casino-med-free-spins-utan-omsattningskrav">Free spins utan omsättningskrav</Link></div>
          <div className={styles['link-div']}><Link href="/casino-med-bankid">Casino med BankId</Link></div>
          <div className={styles['link-div']}><Link href="/casino-med-swish">Casino med Swish</Link></div>
        </div>
      </nav>
    </header>
  )
}

export default Menu
