"use client";

import styles from "./Header.module.css";

const Header = ({ openModal }: { openModal: () => void }) => {
  return (
    <header className={styles.header}>
      <nav>
        <button onClick={openModal} className={styles.button}>
          ✏️
        </button>
      </nav>
      <button className={styles.button}>⚙️</button>
    </header>
  );
};

export default Header;
