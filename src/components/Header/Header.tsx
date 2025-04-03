"use client";

import styles from "./Header.module.css";
import Link from "next/link";

interface HeaderProps {
  openModal: () => void;
  toggleView: () => void;
  isListView: boolean;
}

const Header = ({ openModal, toggleView, isListView }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.l_container}>
        <div className={styles.menu_container}>
          <button className={styles.menu_icon}>🗂️</button>
        </div>
        <div className={styles.logo_container}>
          <Link className={styles.logo_icon} href="/">
            🙂
          </Link>
        </div>
      </div>
      <div className={styles.r_container}>
        <button onClick={openModal} className={styles.button}>
          ✏️
        </button>
        <button onClick={toggleView} className={styles.button}>
          {isListView ? "🟰" : "🟨"}
        </button>
        <button className={styles.button}>⚙️</button>
      </div>
    </header>
  );
};

export default Header;
