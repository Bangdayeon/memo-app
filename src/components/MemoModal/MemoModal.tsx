"use client";

import { useState } from "react";
import styles from "./MemoModal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (memo: string) => void;
}

const MemoModal = ({ isOpen, onClose, onSave }: ModalProps) => {
  const [text, setText] = useState("");

  const handleSave = () => {
    if (text.trim()) {
      const savedMemoList = JSON.parse(
        localStorage.getItem("memoList") || "[]"
      );
      const newMemoList = [...savedMemoList, text];
      localStorage.setItem("memoList", JSON.stringify(newMemoList));
      onSave(text);
      setText("");
      onClose();
    }
  };

  return isOpen ? (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="메모를 입력하세요..."
          className={styles.memoTextarea}
        />
        <nav className={styles.buttonContainer}>
          <button onClick={handleSave} className={styles.button}>
            저장
          </button>
          <button onClick={onClose} className={styles.button}>
            닫기
          </button>
        </nav>
      </div>
    </div>
  ) : null;
};

export default MemoModal;
