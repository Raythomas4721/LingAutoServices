/* 自訂初始化的 Swiper 套件的函式 */
function initSwiper() {
    /* 
    id="comment-swiper" 區塊是我想要使用 swiper 套件的範圍
    要抓取 id "#comment-swiper"
    可以參考 CodePen 來看這個 id 是對應到哪個區塊
    */
      
    const swiper = new Swiper("#comment-swiper", {
        
      /*  預設要顯示幾個卡片 */
      slidesPerView: 1,
        
      /* 斷點設定 */
      breakpoints: {
        /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
        992: {
          slidesPerView: 3
        },
        /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
        768: {
          slidesPerView: 2
        },
        /* 更小時都顯示 1 欄 */
        0: {
          slidesPerView: 1
        }
      },
      /* 卡片元素的間隔 */
      spaceBetween: 16,
      pagination: {
        /* 想將分頁圓點綁在哪個 class */
        el: ".swiper-pagination",
        /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
        clickable: true
      }
    });
  }
  
  /* 觸發自己定義的函式 */
  initSwiper();