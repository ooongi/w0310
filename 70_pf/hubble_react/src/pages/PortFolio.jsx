import "../css/Portfolio.css";

// 구조분해할당
function BookCard({ bookLink, image, alt, overLay }) {
    return (
        // 책링크
        <a href={bookLink} target="_blank">
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
            bookLink: "https://ooongi.github.io/w0310/70_pf/srt",
            overLay: "",
            image: "/images/srt.png",
            alt: "SRT 홈페이지 리디자인",
        },
        {
            bookLink: "https://ooongi.github.io/w0310/70_pf/jeep",
            overLay: "",
            image: "/images/jeep.png",
            alt: "Jeep 홈페이지 리디자인",
        },
        {
            bookLink: "https://ooongi.github.io/w0310/70_pf/tylenol",
            overLay: "",
            image: "/images/tylenol.png",
            alt: "타이레놀 홈페이지 리디자인",
        },
        {
            bookLink: "https://ooongi.github.io/w0310/70_pf/haribo_pf",
            overLay: "",
            image: "/images/haribo.png",
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
