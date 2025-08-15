import React from 'react'
import { FaqBox } from "@/types/types"
import FaqComponentItem from './FaqComponentItem'
import styles from './FaqComponent.module.css'

function FaqComponent({ 
  faqBox, 
  title
}: { 
  faqBox: FaqBox, 
  title?: string 
}) {
  const faqItems = faqBox;
  
  return (
    <section>
      <h2>Vanliga fragor om {title}</h2>
      <div className={styles['faq-container']}>
        {Array.isArray(faqItems) && faqItems.map((item, index) => (
          <FaqComponentItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
          />
        ))}
      </div>
    </section>
  )
}

export default FaqComponent