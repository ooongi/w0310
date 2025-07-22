// 데이터
import { data } from "./data.js";

const tabs = $("#tabs");
const tabs_1 = tabs.find("#tabs-1");

const tabMenu = function (idx0, idx1, idx2, idx3) {
    tabs_1.html(`
            <div>
                <div>
                    <img src="${data[idx0].img}" alt="${data[idx0].txt}">
                </div>
                <h3>${data[idx0].txt}</h3>
                <p>${data[idx0].txt2}</p>
            </div>
            <div>
                <div>
                    <img src="${data[idx1].img}" alt="${data[idx1].txt}">
                </div>
                <h3>${data[idx1].txt}</h3>
                <p>${data[idx1].txt2}</p>
            </div>
            <div>
                <div>
                    <img src="${data[idx2].img}" alt="${data[idx2].txt}">
                </div>
                <h3>${data[idx2].txt}</h3>
                <p>${data[idx2].txt2}</p>
            </div>
            <div>
                <div>
                    <img src="${data[idx3].img}" alt="${data[idx3].txt}">
                </div>
                <h3>${data[idx3].txt}</h3>
                <p>${data[idx3].txt2}</p>
            </div>
        `);
};


export default tabMenu;
