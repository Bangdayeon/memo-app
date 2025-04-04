// 날짜 ㄱ객체를 YYYY-MM-DD HH:mm:ss 형식으로 변환환
export const formatDate = (date: Date, locale: string = "ko_KR"): string => {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
};

//현재 타임스탬프 반환환
export const getCurrentTimeStamp = () => {
  return Date.now();
};

//지난 시간 계산산
export const getTimeAgo = (timestamp: number) => {
  const now = Date.now();
  const diff = now - timestamp;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}일 전`;
  if (hours > 0) return `${hours}시간 전`;
  if (minutes > 0) return `${minutes}분 전`;
};
