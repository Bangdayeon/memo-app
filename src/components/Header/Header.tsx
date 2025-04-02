"use client";

import styles from "./Header.module.css";

interface HeaderProps {
  openModal: () => void;
  toggleView: () => void;
  isListView: boolean;
}

const Header = ({ openModal, toggleView, isListView }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <nav>
        <button onClick={openModal} className={styles.button}>
          ✏️
        </button>
      </nav>
      <nav>
        <button onClick={toggleView} className={styles.button}>
          {isListView ? "🟰" : "🟨"}
        </button>
        <button className={styles.button}>⚙️</button>
      </nav>
    </header>
  );
};

export default Header;
