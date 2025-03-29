"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {

    return (
        <header className={styles.header}>
            <nav>
                <Link href="/">
                    <button className={styles.button}>🏠</button>
                </Link>
                <Link href="/writing">
                    <button className={styles.button}>✏️</button>
                </Link>
                    
            </nav>
            <button className={styles.button}>⚙️</button>
        </header>
    )
}