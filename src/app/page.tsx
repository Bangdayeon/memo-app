"use client";
import { useState } from "react";
import Header from "@/components/Header/Header";
import MemoList from "./(route)/main/_components/MemoList";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isListView, setIsListView] = useState(false);

  // Open||Close Modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleView = () => {
    setIsListView((prev) => !prev);
  };

  return (
    <div>
      <Header
        openModal={openModal}
        toggleView={toggleView}
        isListView={isListView}
      />
      <MemoList
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        isListView={isListView}
      />
    </div>
  );
};

export default HomePage;
