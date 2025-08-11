window.addEventListener("DOMContentLoaded", () => {
    const font_1 = document.querySelector(".font_1");
    const font_2 = document.querySelector(".font_2");
    const font_3 = document.querySelector(".font_3");
    const font_4 = document.querySelector(".font_4");
    const img_1 = document.querySelector(".img_1");

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
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.sec1_slider');
    const slideCount = slides.children.length;
    let currentIndex = 0;
    let isHorizontal = true;  // 현재 모드: 가로(true) / 세로(false)
    let scrolling = false;     // 쿨다운 플래그

    function updateAnimations() {
        const slidesArray = Array.from(slides.children);
        slidesArray.forEach((slide, idx) => {
            const animElem = slide.querySelector('.sec1_container_2 .img_1');
            if (!animElem) return; // fade-in 요소 없으면 무시

            if (idx === currentIndex) {
                animElem.classList.add('active');
            } else {
                animElem.classList.remove('active');
            }
        });
    }
    function updateAnimations_2() {
        const slidesArray = Array.from(slides.children);
        slidesArray.forEach((slide, idx) => {
            const animElem = slide.querySelector('.sec1_container_3 .img_1');
            if (!animElem) return; // fade-in 요소 없으면 무시

            if (idx === currentIndex) {
                animElem.classList.add('active');
            } else {
                animElem.classList.remove('active');
            }
        });
    }

    function goToSlide(index) {
        slides.scrollTo({
            left: index * window.innerWidth,
            behavior: 'smooth'
        });

        updateAnimations();
        updateAnimations_2();
    }

    function startCooldown() {
        scrolling = true;
        setTimeout(() => scrolling = false, 700);
    }

    // 가로 모드 휠 이벤트 처리
    function handleHorizontalWheel(e) {
        if (scrolling) return;
        if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

        const direction = e.deltaY > 0 ? 1 : -1;

        if (direction > 0 && currentIndex < slideCount - 1) {
            e.preventDefault();
            currentIndex++;
            goToSlide(currentIndex);
            startCooldown();
        } else if (direction < 0 && currentIndex > 0) {
            e.preventDefault();
            currentIndex--;
            goToSlide(currentIndex);
            startCooldown();
        } else if (currentIndex === slideCount - 1 && direction > 0) {
            // 마지막 슬라이드 → 세로 모드 전환
            e.preventDefault();
            isHorizontal = false;
            document.body.style.overflowY = 'auto';
            startCooldown();
        }
    }

    // 세로 모드 휠 이벤트 처리
    function handleVerticalWheel(e) {
        if (scrolling) return;
        if (window.scrollY === 0 && e.deltaY < 0) {
            // 세로 스크롤 최상단에서 위로 스크롤 시 가로 모드 복귀
            e.preventDefault();
            isHorizontal = true;
            document.body.style.overflowY = 'hidden';
            currentIndex = slideCount - 1; // 마지막 슬라이드부터 시작
            goToSlide(currentIndex);
            startCooldown();
        }
    }

    // 메인 휠 이벤트 핸들러 (모드에 따라 분기)
    window.addEventListener('wheel', (e) => {
        if (isHorizontal) {
            handleHorizontalWheel(e);
        } else {
            handleVerticalWheel(e);
        }
    }, { passive: false });

    // 키보드 이벤트 (가로 모드에서만 동작)
    document.addEventListener('keydown', (e) => {
        if (!isHorizontal || scrolling) return;
        if (e.key === 'ArrowRight' && currentIndex < slideCount - 1) {
            currentIndex++;
            goToSlide(currentIndex);
            startCooldown();
        }
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            goToSlide(currentIndex);
            startCooldown();
        }
    });
});