document.addEventListener("DOMContentLoaded", () => {
    const sections = [
        document.getElementById("sec1"),
        document.getElementById("section2"),
        document.getElementById("sec3"),
        document.getElementById("footer"),
    ];
    let currentSection = 0;
    let isScrolling = false;

    // ===== Section1 =====
    const sec1Slider = document.querySelector(".sec1_slider");
    const sec1SlideCount = sec1Slider.children.length;
    let sec1Index = 0;

    function sec1UpdateAnimations() {
        const slidesArray = Array.from(sec1Slider.children);
        slidesArray.forEach((slide, idx) => {
            const anim1 = slide.querySelector(".sec1_container_2 .img_1");
            const anim2 = slide.querySelector(".sec1_container_3 .img_1");
            if (anim1) anim1.classList.toggle("active", idx === sec1Index);
            if (anim2) anim2.classList.toggle("active", idx === sec1Index);
        });
    }

    function sec1GoSlide(index) {
        sec1Index = index;
        sec1Slider.scrollTo({
            left: index * window.innerWidth,
            behavior: "smooth",
        });
        sec1UpdateAnimations();
    }

    // ===== Section2 =====
    const sec2Pages = ["first", "second", "third"];
    let sec2Index = 0;
    const sec2Bg = document.getElementById("bg");
    const sec2Product = document.getElementById("product");

    function sec2ShowPage(index) {
        sec2Pages.forEach((id, i) => {
            const el = document.getElementById(id);
            if (el) el.classList.toggle("active", i === index);
        });

        // 배경 & 제품 스타일
        if (index === 0) {
            sec2Bg.style.borderRadius = "0px";
            sec2Bg.style.transform = "scale(1)";
            sec2Bg.style.opacity = "1";
            sec2Product.style.transform = "translate(-50%, -50%)";
            sec2Product.style.boxShadow = "none";
        } else if (index === 1) {
            sec2Bg.style.borderRadius = "260px";
            sec2Bg.style.transform = "scale(0.4, 0.5)";
            sec2Bg.style.opacity = "1";
            sec2Product.style.transform = "translate(-5%, -5%)";
            sec2Product.style.boxShadow = "30px 30px 30px rgba(0,0,0,0.5)";
        } else if (index === 2) {
            sec2Bg.style.opacity = "0";
            sec2Product.style.transform = "translate(50%, -60%)";
        }
        sec2Index = index;
    }

    // ===== Section3 =====
    const sec3Slider = document.querySelector(".slides-wrapper");
    const sec3SlideCount = sec3Slider.children.length;
    let sec3Index = 0;

    function sec3GoSlide(index) {
        sec3Index = index;
        sec3Slider.scrollTo({
            left: index * window.innerWidth,
            behavior: "smooth",
        });
    }

    // ===== 섹션 이동 =====
    function scrollToSection(index) {
        if (index < 0) index = 0;
        if (index >= sections.length) index = sections.length - 1;
        currentSection = index;

        sections[index].scrollIntoView({ behavior: "smooth" });

        // 섹션별 초기화
        if (sections[index].id === "sec1") sec1GoSlide(0);
        if (sections[index].id === "section2") sec2ShowPage(0);
        if (sections[index].id === "sec3") sec3GoSlide(0);
    }

    // ===== 메인 휠 이벤트 =====
    window.addEventListener(
        "wheel",
        (e) => {
            if (isScrolling) return;
            isScrolling = true;

            const activeSection = sections[currentSection];

            if (activeSection.id === "sec1") {
                if (e.deltaY > 0 && sec1Index < sec1SlideCount - 1)
                    sec1GoSlide(sec1Index + 1);
                else if (e.deltaY < 0 && sec1Index > 0)
                    sec1GoSlide(sec1Index - 1);
                else {
                    // 섹션 이동
                    currentSection += e.deltaY > 0 ? 1 : -1;
                    scrollToSection(currentSection);
                }
            } else if (activeSection.id === "section2") {
                if (e.deltaY > 0 && sec2Index < sec2Pages.length - 1)
                    sec2ShowPage(sec2Index + 1);
                else if (e.deltaY < 0 && sec2Index > 0)
                    sec2ShowPage(sec2Index - 1);
                else {
                    currentSection += e.deltaY > 0 ? 1 : -1;
                    scrollToSection(currentSection);
                }
            } else if (activeSection.id === "sec3") {
                if (e.deltaY > 0 && sec3Index < sec3SlideCount - 1)
                    sec3GoSlide(sec3Index + 1);
                else if (e.deltaY < 0 && sec3Index > 0)
                    sec3GoSlide(sec3Index - 1);
                else {
                    currentSection += e.deltaY > 0 ? 1 : -1;
                    scrollToSection(currentSection);
                }
            } else {
                // footer는 그냥 이동
                currentSection += e.deltaY > 0 ? 1 : -1;
                scrollToSection(currentSection);
            }

            setTimeout(() => {
                isScrolling = false;
            }, 800);
        },
        { passive: false }
    );
});
