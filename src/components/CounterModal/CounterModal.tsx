"use client";
import { useEffect, useState } from "react";
import styles from "./CounterModal.module.css";

interface CounterModalProps {
    onClose: () => void;
}

const CounterModal = ({ onClose }: CounterModalProps) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Counter App</h2>
                <div className={styles.counterContainer}>
                    <button className={styles.counterButton} disabled>
                        -
                    </button>
                    <span className={styles.counterValue}>0</span>
                    <button className={styles.counterButton} disabled>
                        +
                    </button>
                </div>
                <nav className={styles.buttonContainer}>
                    <button onClick={onClose} className={styles.button}>
                        닫기
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default CounterModal;