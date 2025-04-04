import { ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: ReactNode;
}

export const Modal = ({ isOpen, onClose, content }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div>{content}</div>
        <button className={styles.button} onClick={onClose}>
          ✖️
        </button>
      </div>
    </div>
  );
};
