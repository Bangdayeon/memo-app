// localStorage에 데이터 저장 함수
export const setItem = <T>(key: string, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value); //객체->JSON 문자열
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("localStorage setItem error", error);
  }
};

// localStorage에서 데이터 가져오는 함수
export const getItem = <T>(key: string): T | null => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    return JSON.parse(serializedValue); // JSON 문자열 -> 객체
  } catch (error) {
    console.error("localStorage getItem error", error);
    return null;
  }
};

// localStorage에서 데이터 삭제 함수
export const removeItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("localStorage removeItem error", error);
  }
};

// localStorage에서 모든 데이터 삭제
export const clear = (): void => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("localStorage clear error", error);
  }
};

// 배열 데이터를 안전하게 가져오는 함수
export const getItemArr = <T>(key: string): T[] => {
  const data = getItem<T[]>(key);
  return data ?? []; // null이면 빈 배열 반환
};
