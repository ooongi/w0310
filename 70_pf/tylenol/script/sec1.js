window.addEventListener("DOMContentLoaded", () => {
    const font_1 = document.querySelector(".font_1");
    const font_2 = document.querySelector(".font_2");
    const font_3 = document.querySelector(".font_3");
    const font_4 = document.querySelector(".font_4");
    const img_1 = document.querySelector(".img_1");
    const img_2 = document.querySelector(".img_2");

    // DOM이 화면에 그려진 뒤 실행 → 깜빡임 방지
    setTimeout(() => {
        font_1.classList.add("show");
        font_2.classList.add("show");
    }, 200);

    setTimeout(() => {
        font_3.classList.add("show");
    }, 700);

    setTimeout(() => {
        font_4.classList.add("show");
    }, 1000);

    setTimeout(() => {
        img_1.classList.add("show");
    }, 1000);

    setTimeout(() => {
        img_2.classList.add("show");
    }, 700);
});

const sliderTrack = document.querySelector('.sec1_slider');

sliderTrack.addEventListener('wheel', (e) => {
  e.preventDefault(); // 기본 수직 스크롤 막기
  sliderTrack.scrollLeft += e.deltaY *3; // 수직 휠 값을 가로 스크롤로 적용
});