import "../css/Abouts.css";
import MainImg from "../images/main.jpg";

export default function Subpage() {
    return (
        <div>
            <section className="main">
                <div className="main_container">
                    <img src={MainImg} alt="허블 메인" />
                    </div>
            </section>
        </div>
    );
}
