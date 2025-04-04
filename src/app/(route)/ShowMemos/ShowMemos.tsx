"use client";

import { useState } from "react";
import MemoModal from "@/components/MemoModal/MemoModal";
import MemoCard from "./_components/MemoCard/MemoCard";
import { ManageMemo } from "@/utils/ManageMemo";

import styles from "./ShowMemos.module.css";

const NOTHING_MSG = "텅~";

interface ShowMemosProps {
  isModalOpen: boolean;
  closeModal: () => void;
  isListView: boolean;
}

const ShowMemos = ({ isModalOpen, closeModal, isListView }: ShowMemosProps) => {
  const { memoList, addMemo, deleteMemo, editMemo } = ManageMemo();
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
              onClick={() => setSelectedMemo({ index, content: memo })}
            />
          </div>
        ))
      ) : (
        <p>{NOTHING_MSG}</p>
      )}
      {selectedMemo && (
        <MemoModal
          isOpen={true}
          onClose={() => setSelectedMemo(null)}
          onSave={(updatedMemo) => {
            editMemo(selectedMemo.index, updatedMemo);
            setSelectedMemo(null);
          }}
          initialText={selectedMemo.content || ""}
        />
      )}
      <MemoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={(memo) => {
          addMemo(memo);
          closeModal();
        }}
      />
    </div>
  );
};

export default ShowMemos;
