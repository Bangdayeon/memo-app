"use client";

import {useState} from "react";
import styles from "../styles/Memo.module.css";

const Memo = () => {
    const [text, setText] = useState("");

    return (
        <div className={styles.memoContainer}>
            <textarea
            value={text}
            onChange={(e)=> setText(e.target.value)}
            placeholder="메모를 입력하세요..."
            className={styles.memoTextarea}
            />
        </div>
    );
};

export default Memo;