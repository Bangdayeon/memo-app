"use client";

import { useState } from "react";
import { Modal } from "../Modal/Modal";

import styles from "./Header.module.css";
import Link from "next/link";

interface HeaderProps {
  openInputModal: () => void;
  toggleView: () => void;
  isListView: boolean;
}

const Header = ({ openInputModal, toggleView, isListView }: HeaderProps) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className={styles.header}>
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
        <button onClick={openInputModal} className={styles.button}>
          ✏️
        </button>
        <button onClick={toggleView} className={styles.button}>
          {isListView ? "🟰" : "🟨"}
        </button>
        <button
          className={styles.button}
          onClick={() => setIsSettingsOpen(true)}
        >
          ⚙️
        </button>
      </div>

      {/* 설정 모달 */}
      <Modal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        content={<h2>설정</h2>}
      />
    </div>
  );
};

export default Header;
