"use client";
// import { useState, useEffect } from "react";
import styles from "./MemoList.module.css";

const MemoList = ({ memoList }: { memoList: string[] }) => {
  //localStorage에서 저장된 메모 목록 불러오기
  // useEffect(()=>{
  //     const savedMemoList = localStorage.getItem("memoList");
  //     if(savedMemoList) setMemoList(JSON.parse(savedMemoList));
  // }, []);

  // //memoList가 변경될 때마다 localStorage에 저장
  // useEffect(()=>{
  //     if(memoList.length>0){
  //         localStorage.setItem("memoList", JSON.stringify(memoList));
  //     }
  // }, [memoList]);

  return (
    <div className={styles.memo_list}>
      {memoList.length > 0 ? (
        memoList.map((memo, index) => (
          <div className={styles.memo_card} key={index}>
            <p>{memo}</p>
          </div>
        ))
      ) : (
        <p>텅~</p>
      )}
    </div>
  );
};

export default MemoList;
