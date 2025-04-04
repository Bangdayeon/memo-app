"use client";
import { useState } from "react";
import Header from "@/components/Header/Header";
import ShowMemos from "./(route)/ShowMemos/ShowMemos";
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
      <ShowMemos
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        isListView={isListView}
      />
    </div>
  );
};

export default HomePage;
