"use client";
import { useState } from "react";
import Header from "@/components/Header/Header";
import ShowMemos from "./(route)/ShowMemos/ShowMemos";
const HomePage = () => {
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [isListView, setIsListView] = useState(false);

  // Open||Close Modal
  const openInputModal = () => setIsInputModalOpen(true);
  const closeModal = () => setIsInputModalOpen(false);

  const toggleView = () => {
    setIsListView((prev) => !prev);
  };

  return (
    <div>
      <Header
        openInputModal={openInputModal}
        toggleView={toggleView}
        isListView={isListView}
      />
      <ShowMemos
        isInputModalOpen={isInputModalOpen}
        closeModal={closeModal}
        isListView={isListView}
      />
    </div>
  );
};

export default HomePage;
