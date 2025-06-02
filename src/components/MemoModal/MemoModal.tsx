"use client";
import { useEffect, useState } from "react";
import styles from "./MemoModal.module.css";

interface ModalProps {
  onClose: () => void;
  onSave: (memo: string) => void;
  initialText?: string;
}

const MemoModal = ({
  onClose,
  onSave,
  initialText = "",
}: ModalProps) => {
  const [text, setText] = useState(initialText);

  useEffect(() => {
      setText(initialText);
  }, [initialText]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="메모를 입력하세요..."
          className={styles.memoTextarea}
        />
        <nav className={styles.buttonContainer}>
          <button onClick={() => onSave(text)} className={styles.button}>
            저장
          </button>
          <button onClick={onClose} className={styles.button}>
            닫기
          </button>
        </nav>
      </div>
    </div>
  )
};

export default MemoModal;
