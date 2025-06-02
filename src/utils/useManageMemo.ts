import { useState, useEffect } from "react";

const MEMO_STORAGE_KEY = "memoList";

// get Data from localStorage
const getItem = <T>(key: string): T | null => {
  try {
    const serializedValue = localStorage.getItem(key);
    return serializedValue ? JSON.parse(serializedValue) : null;
  } catch (error) {
    console.error("localStorage getItem error", error);
    return null;
  }
};

// set Data to localStorage
const setItem = <T>(key: string, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value); //객체->JSON 문자열
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("localStorage setItem error", error);
  }
};

export const useManageMemo = () => {
  const [memoList, setMemoList] = useState<string[]>([]);

  //메모 불러오기
  useEffect(() => {
    const savedMemoList = getItem<string[]>(MEMO_STORAGE_KEY) ?? [];
    setMemoList(savedMemoList);
  }, []);

  //memoList가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    if (memoList.length === 0) return;
    setItem(MEMO_STORAGE_KEY, memoList);
  }, [memoList]);

  // 메모 추가
  const addMemo = (memo: string) => {
    setMemoList((prev) => [...prev, memo]);
  };

  // 메모 삭제
  const deleteMemo = (index: number) => {
    const newMemoList = memoList.filter((_, i) => i !== index); // changed array
    setMemoList(newMemoList);
    setItem(MEMO_STORAGE_KEY, newMemoList);
  };

  // 메모 수정
  const editMemo = (index: number, newContents: string) => {
    setMemoList((prev) => {
      const newMemoList = [...prev];
      newMemoList[index] = newContents;
      return newMemoList;
    });
  };

  return { memoList, addMemo, deleteMemo, editMemo };
};
