import { useState, useEffect } from "react";

import styles from "./SideMenu.module.css";

interface SideMenuProps {
  isOpen: boolean;
  toggleSideMenu: () => void;
}

export const SideMenu = ({ isOpen, toggleSideMenu }: SideMenuProps) => {
  return (
    <div className={`${styles.sideMenuContainer} ${isOpen ? styles.open : ""}`}>
      <nav className={styles.folderList}>
        <ul>
          <li>폴더 1</li>
          <li>폴더 2</li>
          <li>폴더 3</li>
        </ul>
      </nav>
    </div>
  );
};
