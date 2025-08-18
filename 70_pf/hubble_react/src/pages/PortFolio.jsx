import "../css/Portfolio.css";

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

export default function Portfolio() {
    const books = [
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/6ZPwLod2oZvtfqh57HmXpyKqaw8_-qUDmDLLfZv8pTk6bquMAUXGEpFOjBnrA2fd_uPKtJUVQJin6j1qDJoXkSXSz0fuGXAQC9a9o8YtoHzyUNkAPY12=w800",
            alt: "제 7회 한국과학문학상 수상작품집",
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/OtyZ4Mov3Lp-X7qmGJqwgESasPpu5ZAC3sfZv4NAj6jrodW6vl7PY8Ru34NkTWD8Ey_sVawvMNBOe4oc-GP0a4nvgrGTkJS-V3nLwLJ1hiwC-Zk8AT9-mw=w800",
            alt: "대여금고",
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/AnGv66cCuDwa27GhtKEWLz4hdl3hk6EbDJdzy8jVMREgSzc5fyH0XOTkV-pdgLhymIE5-phmKtfZOstVvb69GY1G958_jIXk8vNFjneVKXAlChhfpDiYgYs=w800",
            alt: "헌치백",
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/2tLF_1RiiOLs9xhGWlPw557isztriJI8RXP3fKwaksfllGWa8QRCeFrVnm93u4i78Ha-1GpHhYCBKSxl_YsBWm-Cm0peXNwjpee_k6quFb5tF2dOFMU8Ww=w800",
            alt: "제인의 마법 살롱",
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/MSyCSPewIAfrmf6ruUHaGdScWm1Fx9Z-wAd5iw23GHESR1WSOZlYFm2ftqnDzuwFsKtpdnCAMv3xFI-NA4aChiUSbsDEonJ9RBk6hevLOYx_8nn_-5qD1w=w800",
            alt: "오펜하이머",
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/C6ry4sMMJBY4ExWizCkoP5dVvtzbujQXahmgJhszEOtnF00UeWfCc6q7gcGKWQdC5_nCpFxldwHdqqpG6kukz6MH8qXVRNn_q7bv0blrRFkdGUHwaiDhDw=w800",
            alt: "좋은 엄마 학교",
        },
        {
            bookLink: "#",
            overLay: "자세히 보기",
            image: "https://lh3.googleusercontent.com/0CpENGOz685UiCS8lZfji6LeWK0DW82zj5q5fARPE-HWrjIXPcmuEggsW1-mq2ci9ijI9YLKhy9QAj_njArPsU15uoTfC_wpe3Lg2D4U3RVn-eCFqPcSRRo=w800",
            alt: "사랑이 제곱이 되었다",
        }
    ];

    return (
        <div>
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
