"use client";

import { useState, useEffect } from "react";
import { getItemArr, setItem } from "@/utils/storage";
import MemoModal from "@/components/MemoModal/MemoModal";

import styles from "./MemoList.module.css";

const MEMO_STORAGE_KEY = "memoList";
const NOTHING_MSG = "텅~";

interface MemoListProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const MemoList = ({ isModalOpen, closeModal }: MemoListProps) => {
  const [memoList, setMemoList] = useState<string[]>([]);

  //localStorage에서 저장된 메모 목록 불러오기
  useEffect(() => {
    const savedMemoList = getItemArr<string>(MEMO_STORAGE_KEY);
    setMemoList(savedMemoList);
  }, []);

  //memoList가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    if (memoList.length === 0) return;
    setItem(MEMO_STORAGE_KEY, memoList);
  }, [memoList]);

  const handleSavedMemo = (memo: string) => {
    const newMemoList = [...memoList, memo];
    setMemoList(newMemoList);
    setItem(MEMO_STORAGE_KEY, newMemoList);
    closeModal();
  };

  return (
    <div className={styles.memo_list}>
      {memoList.length > 0 ? (
        memoList.map((memo, index) => (
          <div className={styles.memo_card} key={index}>
            <p>{memo}</p>
          </div>
        ))
      ) : (
        <p>{NOTHING_MSG}</p>
      )}
      <MemoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSavedMemo}
      />
    </div>
  );
};

export default MemoList;
