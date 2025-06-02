"use client";

import { useState } from "react";
import MemoModal from "@/components/MemoModal/MemoModal";
import MemoCard from "./_components/MemoCard/MemoCard";

import styles from "./ShowMemos.module.css";

const NOTHING_MSG = "텅~";

interface ShowMemosProps {
  memoList: string[];
  addMemo: (memo: string) => void;
  deleteMemo: (index: number) => void;
  editMemo: (index: number, content: string) => void;
  closeModal: () => void;
  isListView: boolean;
}

const ShowMemos = ({ memoList, addMemo, deleteMemo, editMemo, closeModal, isListView }: ShowMemosProps) => {
  const [selectedMemo, setSelectedMemo] = useState<{
    index: number;
    content: string;
  } | null>(null);

  return (
    <div
      className={
        isListView ? styles.memoListContainer : styles.memoCardContainer
      }
    >
      {memoList.length > 0 ? (
        memoList.map((memo, index) => (
          <div key={index}>
            <MemoCard
              contents={memo}
              isListView={isListView}
              onDelete={() => deleteMemo(index)}
              openModal={() => setSelectedMemo({ index, content: memo })}
            />
          </div>
        ))
      ) : (
        <p>{NOTHING_MSG}</p>
      )}
      {selectedMemo && (
        <MemoModal
          onClose={() => setSelectedMemo(null)}
          onSave={(updatedMemo) => {
            editMemo(selectedMemo.index, updatedMemo);
            setSelectedMemo(null);
          }}
          initialText={selectedMemo.content || ""}
        />
      )}
    </div>
  );
};

export default ShowMemos;
