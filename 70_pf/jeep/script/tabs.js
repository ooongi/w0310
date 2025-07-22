import tabMenu from "./section3.js";

$(() => {
    // const data = [
    //     {
    //         img: "./images/vehicles_gche.png",
    //         txt: "GRAND CHEROKEE L",
    //         txt2: "A LEGACY EXTENDED",
    //     },
    //     {
    //         img: "./images/vehicles_renegade.png",
    //         txt: "RENEGADE",
    //         txt2: "BORN TO BE WILD",
    //     },
    //     {
    //         img: "./images/vehicles_wrangler.png",
    //         txt: "WRANGLER",
    //         txt2: "FAMOUS FOR FREEDOM",
    //     },
    //     {
    //         img: "./images/vehicles_avenger.png",
    //         txt: "AVENGER",
    //         txt2: "ELECTRIC ADVENTURE",
    //     },
    // ];

    // 객체 탐색
    const tabs = $("#tabs");
    const btn = tabs.find("#tabs_btn a");

    // 객체 생성
    // function tabMenu(idx0, idx1, idx2, idx3) {
    //     tabs_1.html(`
    //         <div>
    //             <div>
    //                 <img src="${data[idx0].img}" alt="${data[idx0].txt}">
    //             </div>
    //             <h3>${data[idx0].txt}</h3>
    //             <p>${data[idx0].txt2}</p>
    //         </div>
    //         <div>
    //             <div>
    //                 <img src="${data[idx1].img}" alt="${data[idx1].txt}">
    //             </div>
    //             <h3>${data[idx1].txt}</h3>
    //             <p>${data[idx1].txt2}</p>
    //         </div>
    //         <div>
    //             <div>
    //                 <img src="${data[idx2].img}" alt="${data[idx2].txt}">
    //             </div>
    //             <h3>${data[idx2].txt}</h3>
    //             <p>${data[idx2].txt2}</p>
    //         </div>
    //         <div>
    //             <div>
    //                 <img src="${data[idx3].img}" alt="${data[idx3].txt}">
    //             </div>
    //             <h3>${data[idx3].txt}</h3>
    //             <p>${data[idx3].txt2}</p>
    //         </div>
    //     `);
    // }

    // 이벤트

    tabMenu(0, 1, 2, 3);

    btn.click(function (e) {
        // a태그 기본 이벤트(링크 이동) 막기
        e.preventDefault();

        // 모든 탭 버튼 색 초기화
        btn.css({ color: "var(--grayTextColor)" });
        // 현재 클릭한 탭만 색 변경
        $(this).css({ color: "var(--whiteTextColor)" });

        // idx는 li의 순번 0, 1, 2, 3
        let idx = $(this).parent().index();

        // 제어문
        switch (idx) {
            case 0:
                tabMenu(0, 1, 2, 3);
                break;

            case 1:
                tabMenu(2, 0, 3, 1);
                break;
        }
    });

    $(idx).show();
});
