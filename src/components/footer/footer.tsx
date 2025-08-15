import styles from "./footer.module.css"

interface FooterProps {
    className?: string;
}

export default function Footer() {
    return (
      <footer className={styles['footer-container']}>
        <div className={styles['footer-content']}>© 2023 Your Company. All rights reserved.</div>
      </footer>
    );
}
  