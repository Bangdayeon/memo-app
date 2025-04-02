"use client";
import { useState } from "react";
import Header from "@/components/Header/Header";
import MemoList from "./(route)/main/_components/MemoList";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open||Close Modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Header openModal={openModal} />
      <MemoList isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default HomePage;
