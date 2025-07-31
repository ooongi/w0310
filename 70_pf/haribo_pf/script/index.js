// const saTriggerMargin = 150;
// const saElementList = document.querySelectorAll(".motion");

// console.log('saElementList:', saElementList); // 이 줄 추가!
// console.log('saElementList 길이:', saElementList.length); // 이 줄 추가!

// const saFunc = function() {
//     console.log('saFunc 실행됨');
    
//     if (saElementList.length === 0) {
//         console.log('motion 클래스를 가진 요소가 없습니다!');
//         return;
//     }
    
//     saElementList.forEach(function(element, index) {
//         console.log('요소 체크:', element);
//         // 나머지 코드...
//     });
// }
// setTimeout(function() {
//     const test = document.querySelectorAll('.motion');
//     console.log('1초 후 요소 개수:', test.length);
// }, 1000);


// const saFunc = function() {
//     saElementList.forEach(function(element, index) {
        
//         if (!element.classList.contains('show')) {
//             const elementTop = element.getBoundingClientRect().top;
//             const triggerPoint = window.innerHeight - saTriggerMargin;
                        
//             if (elementTop < triggerPoint) {
//                 element.classList.add('show');
//             }
//         }
//     });
// }
// window.addEventListener("load", saFunc);
// window.addEventListener("scroll", saFunc);

document.addEventListener('DOMContentLoaded', function() {
    const saTriggerMargin = 150;
    const saElementList = document.querySelectorAll('.motion');
        
    const saFunc = function() {
        saElementList.forEach(function(element, index) {
            if (!element.classList.contains('show')) {
                if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
                    element.classList.add('show');
                }
            }
        });
    }
    
    window.addEventListener('load', saFunc);
    window.addEventListener('scroll', saFunc);
});