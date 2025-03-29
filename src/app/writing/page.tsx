"use client";

import {useState} from "react";
import styles from "@/styles/writing.module.css";

export default function WritingPage() {
    const [text, setText] = useState("");

    const addMemo = ()=> {
        if(text.trim()){
            const savedMemoList = JSON.parse(localStorage.getItem("memoList")||"[]");
            const newMemoList = [...savedMemoList, text];
            localStorage.setItem("memoList", JSON.stringify(newMemoList));
            setText("");
        }
    }


    return (
        <div className={styles.memoContainer}>
            <textarea
                value={text}
                onChange={(e)=> setText(e.target.value)}
                placeholder="메모를 입력하세요..."
                className={styles.memoTextarea}
            />
            <button onClick={addMemo}>저장</button>
        </div>
    );
};