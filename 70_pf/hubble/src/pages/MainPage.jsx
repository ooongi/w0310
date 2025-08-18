import "../css/Main.css";
import MainImg from "../images/main.jpg";

export default function MainPage() {
    return (
        <div className="main">
            <img src={MainImg} alt="허블 메인" />
        </div>
    );
}
