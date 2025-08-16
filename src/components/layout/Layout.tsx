import Menu from "@/components/menu/Menu";
import Footer from "@/components/footer/footer";
import styles from './layout.module.css';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Menu />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
