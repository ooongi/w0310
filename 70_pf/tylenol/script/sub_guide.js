$(".motion").each(function (index, elem) {
    new Waypoint({
        element: elem,
        handler: function (direction) {
            if (direction === "down") {
                // 화면에 들어올 때 나타남
                $(elem)
                    .stop(true, true)
                    .delay(index * 100)
                    .animate(
                        { top: 0, opacity: 1 },
                        300
                    );
            } else {
                // 위로 스크롤해서 뷰포트에서 벗어날 때 사라짐
                $(elem)
                    .stop(true, true)
                    .delay(index * 100)
                    .animate(
                        { top: 200, opacity: 0 },
                        300
                    );
            }
        },
        offset: "70%" // 요소가 화면의 어느 지점에서 반응할지 조정
    });
});
