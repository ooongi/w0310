// 스크롤 이벤트 감지 및 클래스 토글
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNavbar');
    // 스크롤이 50px 이상 되면 헤더에 navbar-scrolled 클래스가 추가
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});


// skill
const progressBars = document.querySelectorAll("#skill .progress-bar");

function animateProgress(bar) {
    const target = parseInt(bar.getAttribute("data-target"), 10);
    let count = 0;

    // 초기화
    bar.style.width = "0%";
    bar.textContent = "0%";

    const speed = 15; // 숫자가 커질 속도 (ms)
    const timer = setInterval(() => {
        if (count >= target) {
            clearInterval(timer);
        } else {
            count++;
            bar.style.width = count + "%";
            bar.textContent = count + "%";
        }
    }, speed);
}

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgress(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 // 절반 이상 보여질 때 시작
});

progressBars.forEach(bar => observer.observe(bar));


// 업적 카운터 애니메이션
const counters = document.querySelectorAll(".row.text-bg-secondary .fs-4");

function animateCounter(el) {
    // 목표 숫자(예: "4+" → 4) 추출
    const target = parseInt(el.textContent, 10);
    let count = 0;
    const speed = 50; // 숫자 증가 속도 (ms)

    el.textContent = "0+";

    const timer = setInterval(() => {
        if (count >= target) {
            clearInterval(timer);
            el.textContent = target + "+"; // 마지막에 + 붙여줌
        } else {
            count++;
            el.textContent = count + "+";
        }
    }, speed);
}

function handleCounterIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
        }
    });
}

const counterObserver = new IntersectionObserver(handleCounterIntersection, {
    threshold: 0.5 // 절반 이상 보이면 실행
});

counters.forEach(counter => counterObserver.observe(counter));


// 작품 이미지 라이트 박스
lightbox.option({
    'resizeDuration': 200,      // 이미지 전환 애니메이션 속도(ms)
    'wrapAround': true,         // 마지막 이미지에서 첫 번째 이미지로 이동 가능
    'alwaysShowNavOnTouchDevices': true, // 모바일에서도 화살표 항상 보이기
    'fadeDuration': 200,        // 페이드인·아웃 속도
    'imageFadeDuration': 200    // 이미지 자체 전환 속도
});