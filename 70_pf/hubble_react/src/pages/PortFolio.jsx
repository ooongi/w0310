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
            overLay: "",
            image: "/images/srt.png",
            alt: "SRT 홈페이지 리디자인",
        },
        {
            bookLink: "#",
            overLay: "",
            image: "/images/jeep.png",
            alt: "Jeep 홈페이지 리디자인",
        },
        {
            bookLink: "#",
            overLay: "",
            image: "/images/tylenol.png",
            alt: "타이레놀 홈페이지 리디자인",
        }
    ];

    return (
        <div>
            <div className="bookbox">
                <div className="bookbox-container">
                    {books.map((book, i) => (
                        <BookCard
                            key={i}
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
