//문자열이 비었는지 확인
export const isEmpty = (str: string): boolean => {
  return str.trim().length === 0;
};

//문자열 길이 제한, 이상일 때 '...' 붙이기
export const truncate = (str: string, maxLength: number): string => {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
};

//HTML 태그 제거 함수
export const stripHTMLTag = (str: string): string => {
  return str.replace(/<[^]*>/g, "");
};
