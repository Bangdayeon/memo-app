"use client";
import { useState } from "react";
import Header from "@/components/Header/Header";
import ShowMemos from "./(route)/ShowMemos/ShowMemos";
import ModalManager from "@/components/ModalManager/ModalManager";

import {useManageMemo} from "@/utils/useManageMemo";

type ModalType =
  | null
  | { type: "counter" }
  | { type: "memo"; initialText?: string; onSave?: (text: string) => void };

const HomePage = () => {
  const {memoList, addMemo, deleteMemo, editMemo} = useManageMemo();
  const [modal, setModalType] = useState<ModalType>(null);
  const [isListView, setIsListView] = useState(false);

  // Open||Close Modal
  const openModal = (type: "memo" | "counter") => {
    if (type ==="memo") {
      setModalType({
        type: "memo",
        onSave: (text) => {
          addMemo(text);
        },
        initialText: "",
      });
    } else if (type === "counter") {
      setModalType({ type: "counter" });
    }
  };

  const closeModal = () => setModalType(null);

  const toggleView = () => setIsListView((prev) => !prev);

  return (
    <div>
      <Header
        openModal={openModal}
        toggleView={toggleView}
        isListView={isListView}
      />
      <ShowMemos
        memoList={memoList}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
        editMemo={editMemo}
        closeModal={closeModal}
        isListView={isListView}
      />
      <ModalManager modal={modal} onClose={closeModal} />
    </div>
  );
};

export default HomePage;
