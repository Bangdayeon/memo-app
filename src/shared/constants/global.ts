// 프로젝트 공통 전역 상수(Global Constants) 관리
// API 엔드포인트, 기본 설정 값, 공통 문자열 등 정리

export const SITE_NAME = "My Memo";
export const DEFAULT_LANGUAGE = "ko";

export const API_BASE_URL = "https://api.example.com"; //API 기본 URL
export const DEFAULT_PAGE_SIZE = 10; // 기본 페이지네이션 개수
export const SUPPORT_EMAIL = "support@example.com"; // 고객지원 이메일

// [ ERROR MESSAGE ]
export const ERROR_MSG = {
  NETWORK: "네트워크 연결이 원활하지 않습니다.",
  AUTH_FAILED: "인증에 실패했습니다. 다시 시도해주세요.",
  NOT_FOUND: "요청하신 페이지를 찾을 수 없습니다.",
};
