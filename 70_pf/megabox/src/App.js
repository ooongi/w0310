import { useState } from "react";
import "./css/App.css";

// 구조분해할당
function MovieCard({ rank, image, alt, initialLikes }) {
    
    // useState() 정의
    const [likes, setLikes] = useState(initialLikes);
    const handleLike = () => setLikes(likes + 1);

    return (
        <div className="movie-card">
            {/* 영화순위 */}
            <div className="rank">{rank}</div>
            {/* 이미지 */}
            <img src={image} alt={alt} />
            <div className="likes-btn">
                {/* 좋아요 */}
                <button className="likes" onClick={handleLike}>
                    ♡ {likes}
                </button>
                {/* 예매버튼 */}
                <a href="#">예매</a>
            </div>
        </div>
    );
}

function App() {
    const movies = [
        {
            rank: 1,
            image: "https://img.megabox.co.kr/SharedImg/2025/06/12/hWiZN7PP9G18jB18bS2BfyOTRDPpJH0m_420.jpg",
            alt: "f1 극장판",
            likes: 330,
        },
        {
            rank: 2,
            image: "https://img.megabox.co.kr/SharedImg/2025/07/25/xW9c9qjuflwzzoHf6PPnfWOE5cAF4v4j_420.jpg",
            alt: "머터리얼리스트",
            likes: 220,
        },
        {
            rank: 3,
            image: "https://img.megabox.co.kr/SharedImg/2025/07/18/5ZOx97wuYqpVzK3mhBern9uE0vvpmVyI_420.jpg",
            alt: "판타스틱 4: 새로운 출발",
            likes: 200,
        },
        {
            rank: 4,
            image: "https://img.megabox.co.kr/SharedImg/2025/07/18/4YK2irxhOiFvbz4RqiNAGNvPDssz2wiM_420.jpg",
            alt: "첫여름",
            likes: 170,
        },
    ];
    return (
        <div>
            <h2>박스오피스</h2>
            <div className="boxoffice">
                {/*
                리스트 랜더링
                  배열.map((element, [index], [arr])=>{});
                  {arrays.map((array) => {return (값)})}
                  {arrays.map((array) => 값)}
                  */}
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.rank}
                        rank={movie.rank}
                        image={movie.image}
                        alt={movie.alt}
                        initialLikes={movie.likes}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
