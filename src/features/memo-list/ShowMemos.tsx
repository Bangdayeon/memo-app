"use client";

import { useState } from "react";
import InputModal from "@/components/InputModal/InputModal";
import MemoCard from "./components/MemoCard";
import { ManageMemo } from "@/shared/utils/ManageMemo";

import styles from "./ShowMemos.module.css";

const NOTHING_MSG = "텅~";

interface ShowMemosProps {
  isInputModalOpen: boolean;
  closeModal: () => void;
  isListView: boolean;
}

const ShowMemos = ({
  isInputModalOpen,
  closeModal,
  isListView,
}: ShowMemosProps) => {
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
              openModal={() => setSelectedMemo({ index, content: memo })}
            />
          </div>
        ))
      ) : (
        <p>{NOTHING_MSG}</p>
      )}
      {selectedMemo && (
        <InputModal
          isOpen={true}
          onClose={() => setSelectedMemo(null)}
          onSave={(updatedMemo: string) => {
            editMemo(selectedMemo.index, updatedMemo);
            setSelectedMemo(null);
          }}
          initialText={selectedMemo.content || ""}
        />
      )}
      <InputModal
        isOpen={isInputModalOpen}
        onClose={closeModal}
        onSave={(memo: string) => {
          addMemo(memo);
          closeModal();
        }}
      />
    </div>
  );
};

export default ShowMemos;
