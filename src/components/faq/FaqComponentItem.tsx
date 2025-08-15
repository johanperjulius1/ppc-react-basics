'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FaqItem } from '@/types/types'
import styles from './FaqComponent.module.css'

function FaqComponentItem({ question, answer }: FaqItem) {
  const [isActive, setIsActive] = useState(true);
  
  const toggleFaq = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={isActive ? `${styles.faq} ${styles.active}` : styles.faq}>
      <h3 className={styles['faq-title']}>
        {question}
      </h3>
      <button className={styles['faq-toggle']} onClick={toggleFaq}>
        <FontAwesomeIcon icon={isActive ? faTimes : faChevronDown} />
      </button>
      <p className={styles['faq-text']}>{answer}</p>
    </div>
  )
}

export default FaqComponentItem 