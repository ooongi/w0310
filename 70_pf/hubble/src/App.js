import "./css/App.css";
import logoImg from "./images/logo.png";

// 구조분해할당
function BookCard({ bookLink, image, alt, overLay }) {
    return (
        // 책링크
        <a href={bookLink}>
            {/* 책 이미지,설명,오버레이 */}
            <div className="book-card">
                <img src={image} alt={alt} />
                <div className="overlay">{overLay}</div>
            </div>
        </a>
    );
}

function App() {
    const books = [
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/6ZPwLod2oZvtfqh57HmXpyKqaw8_-qUDmDLLfZv8pTk6bquMAUXGEpFOjBnrA2fd_uPKtJUVQJin6j1qDJoXkSXSz0fuGXAQC9a9o8YtoHzyUNkAPY12=w800",
            alt: "제 7회 한국과학문학상 수상작품집"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/OtyZ4Mov3Lp-X7qmGJqwgESasPpu5ZAC3sfZv4NAj6jrodW6vl7PY8Ru34NkTWD8Ey_sVawvMNBOe4oc-GP0a4nvgrGTkJS-V3nLwLJ1hiwC-Zk8AT9-mw=w800",
            alt: "대여금고"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/AnGv66cCuDwa27GhtKEWLz4hdl3hk6EbDJdzy8jVMREgSzc5fyH0XOTkV-pdgLhymIE5-phmKtfZOstVvb69GY1G958_jIXk8vNFjneVKXAlChhfpDiYgYs=w800",
            alt: "헌치백"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/2tLF_1RiiOLs9xhGWlPw557isztriJI8RXP3fKwaksfllGWa8QRCeFrVnm93u4i78Ha-1GpHhYCBKSxl_YsBWm-Cm0peXNwjpee_k6quFb5tF2dOFMU8Ww=w800",
            alt: "제인의 마법 살롱"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/MSyCSPewIAfrmf6ruUHaGdScWm1Fx9Z-wAd5iw23GHESR1WSOZlYFm2ftqnDzuwFsKtpdnCAMv3xFI-NA4aChiUSbsDEonJ9RBk6hevLOYx_8nn_-5qD1w=w800",
            alt: "오펜하이머"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/C6ry4sMMJBY4ExWizCkoP5dVvtzbujQXahmgJhszEOtnF00UeWfCc6q7gcGKWQdC5_nCpFxldwHdqqpG6kukz6MH8qXVRNn_q7bv0blrRFkdGUHwaiDhDw=w800",
            alt: "좋은 엄마 학교"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/0CpENGOz685UiCS8lZfji6LeWK0DW82zj5q5fARPE-HWrjIXPcmuEggsW1-mq2ci9ijI9YLKhy9QAj_njArPsU15uoTfC_wpe3Lg2D4U3RVn-eCFqPcSRRo=w800",
            alt: "사랑이 제곱이 되었다"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/u0x6-AFk79wQXUtj0eAlxfsYFU49OlNjYq0-J9-NvB082mj7ysU3ESu9L5qEkOZEKAqktmaXxTzEDcuJ5OTUmDvcTlJOuNgV_jHIYrAciIaNRocs37V5=w800",
            alt: "라스트 젤리 샷"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/r7k4QbHzyVajrS5WtBI32F0RXFr9Me_9G6Fa7lfoM3xCf16APwJyMa0KMz7ppV1KNdE-9I7t6wwJQR2TvgD0ml8PmDKKuI0h60ZVfQiUUQdOYJqpM7rvpA=w800",
            alt: "제6회 한국과학문학상 수상작품집"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/iA52ZMeASRFiQXeD9KcwnGvKBQUZ7T--HHn7guk3BIO9yfKy45PoMD0kSmhkmPA8uIVVhOwZ88tg_b2EHaRpU2sxrkQxEak_MO35xxTehlt89nc-ehbp=w800",
            alt: "고양이와 사막의 자매들"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/1AHZENlTWNTG4cNe_3g4xQDq2hLLzXfgMILZxM_yXM60VfK4OR3eYQGYifTYiYTGr1diwzRO3AsZoZhAj37SfmiOm7ZTP46J6KGsuKtAQJu2jxVQZEPrNCw=w800",
            alt: "너라는 이름의 숲"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/ww6owcfS11GTaySuzvtkiqXcXJr5ggmaz6pZCQCAZqKyA57hGRTcVMmJeYc88C82BJ5RkCWY03tR4h0t8TdUCD3jmKQn8Ksc0zemaEA7S6nfCxQAW0O4sbI=w800",
            alt: "파도가 닿는 미래"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/psxYDZGlE8Euez3cxWYvLvBuG9Epj2-WBiRFPuwcxP-yo8sPfemEF_BrwCsIvEGEDQk7Sg6DwXkWvoav4Gh-EjvcxBozAggwEwG0KsS-8pXifXma_AYa=w800",
            alt: "빛과 영원의 시계방"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/HwNUaa6IrckdKzabP_sYKVA4BGxt656x87IVTs_O6xsuSbEzeN5iXCmgDhFiHTEOqywmcb51bq0DG0bq22r3LZRRQFk6J7ba0agaMig_fKIkMD6tn1iVORo=w800",
            alt: "고고의 구멍"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/fN5uMbcS63kBTKU6Jk4N_Vsm0cb6UPmszePRBEcVE8TsF3wQQj23u2i8MKF-dljLjKgpcwTbMwdUL-kmvyNSdQdqUFJD3MoIa5BA1lqCy4zruXSfBbVgwA=w800",
            alt: "사랑에 빠진 네이철"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/mjP5Og-wmE3qd9c9et9tcIa_Pa9hdOhVpMGb81Chn2tFHh5ZWde30poO_6iK__Xp2-RJpO8TWVbbU7Ef2FRWarh4A6D1zEL6pyk_1ncskEIfo4y0HsFUPYs=w800",
            alt: "라스트 휴먼"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/PouwVSO5HSEuzm6JX8og_LSaAx6Jz2sauWEoterryBYL66frMMWJQAiiL_B9csDK8zHswPhzMYKdocpceQ0CFx11eBWzsjY9rzLZpd0C3Q_yEG10N-US=w800",
            alt: "내가 세계의 마지막 소년이라면"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/PzPuMJv60xglfQsRcrOssoyWKavp6r_xqlHkN4ZAo9wF_2W8xy3V5P1GCFX8TXp5pqlORzNhjiAnQrQbp0jfb8UI2-tS3TOMJuPbuDvkgbxg_9-uvmpX=w800",
            alt: "계산된 삶"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/0DNNppL_TpOihwCFiJ11hYfs2ZK9LmiZIzcV_oqufGQAKhikSycdbn5GfKL4H7y1pzhIgD7oXqODkmZlF-i0tp_tqz_qGi09B6gwAUb3O5-wOctz26UsSA=w800",
            alt: "흐드러지는 봉황의 색채"
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/vZkxxsx3DLyvHAG5U7LShx8fT95qO9zydi3OTqTHAiyqze_9Bn4i8nMrI20_9o1Tz3tkbFQlRtyzxZe9DS6spBAUP7w_ro3wXcwXRZt70JwjBgiO-hTN8Ok=w800",
            alt: "쿼런틴 닿는 미래"
        }
    ];
    return (
        <div>
            {/* 네비게이션(임시) */}
            <div className="nav">
                <h1 className="logo">
                    <a href="#">
                        <img src={logoImg} alt="허블"></img>
                    </a>
                </h1>
                <div>
                    <ul className="nav-sub">
                        <li>
                            <a href="#">허블 소개</a>
                        </li>
                        <li>
                            <a href="#">출간 도서</a>
                        </li>
                        <li>
                            <a href="#">제 8회 한국과학문학상</a>
                        </li>
                        <li>
                            <a href="#">독자 문의</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bookinfo">
                <div className="infobox">
                    <div className="infobox_1">
                        <p>출간 도서를</p>
                        <p>소개합니다</p>
                    </div>
                    <div className="infobox_2"></div>
                    <div>
                        <p>섬네일을 클릭하시면</p>
                    </div>
                    <div>
                        <p>상세한 책 소개를 읽을 수 있습니다.</p>
                    </div>
                </div>
            </div>
            <div className="bookbox">
                <div className="bookbox-container">
                    {books.map((book) => (
                        <BookCard
                            bookLink={book.bookLink}
                            image={book.image}
                            alt={book.alt}
                            overLay={book.overLay}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
