// Google Analytics(GA) 관련 설정 관리
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// 페이지 조회 이벤트
// export const pageview = (url: string) => {
//     if(typeof window !== "undefined" && GA_TRACKING_ID){
//         window.gtag("config", GA_TRACKING_ID, {
//             page_path: url,
//         });
//     }
// };

// 사용자 이벤트 트래킹 (ex.버튼 클릭)
// export const event = ({action, category, label, value}:GAEvent)=>{
//     if(typeof window !== "undefined" &&GA_TRACKING_ID){
//         window.gtag("event", action, {
//             event_category: category,
//             event_label: label,
//             value: value,
//         });
//     }
// };

// 이벤트 타입 정의
export interface GAEvent {
  action: string;
  category?: string;
  labbel?: string;
  value?: number;
}
