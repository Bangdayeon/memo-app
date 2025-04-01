"use client";
import { useState } from "react";
import Header from "@/components/Header";
import MemoModal from "@/components/MemoModal";
import MemoList from "./(route)/main/_components/MemoList";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memoList, setMemoList] = useState<string[]>([]);

  // Open/Close Modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveMemo = (memo: string) => {
    setMemoList((prevMemoList) => [...prevMemoList, memo]);
    closeModal();
  };

  return (
    <div>
      <Header openModal={openModal} />
      <MemoList memoList={memoList} />
      <MemoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveMemo}
      />
    </div>
  );
};

export default HomePage;
