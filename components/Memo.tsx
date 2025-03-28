"use client";

import {useState, useEffect} from "react";
import styles from "../styles/Memo.module.css";

const Memo = () => {
    const [text, setText] = useState("");

    //localStorage로부터 memo키에 해당 하는 item을 get, value가 존재한다면 해당 값으로 text 지정
    useEffect(()=>{
        const savedMemo = localStorage.getItem("memo");
        if(savedMemo) setText(savedMemo);
    }, []);

    //text가 있다면 memo키에 text(value) 지정
    useEffect(()=>{
        localStorage.setItem("memo", text);
    }, [text]);


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