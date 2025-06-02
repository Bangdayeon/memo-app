"use client";
import { useState } from "react";
import styles from "./CounterModal.module.css";

interface CounterModalProps {
    onClose: () => void;
}

const CounterModal = ({ onClose }: CounterModalProps) => {
    const [count, setCount] = useState(0);

    const sub = () => {
        setCount(count -1 );
    };
    const add = () => {
        setCount(count + 1);
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Counter App</h2>
                <div className={styles.counterContainer}>
                    <button className={styles.counterButton} onClick={sub}>
                        -
                    </button>
                    <span className={styles.counterValue}>{count}</span>
                    <button className={styles.counterButton} onClick={add}>
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