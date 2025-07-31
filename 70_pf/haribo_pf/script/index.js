// DOMContentLoaded: script를 먼저 읽게 함
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