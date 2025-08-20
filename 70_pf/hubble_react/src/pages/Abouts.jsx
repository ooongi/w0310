import "../css/Abouts.css";

export default function Abouts() {
    return (
        <div>
            <section className="main">
                <div className="main_container">
                    <div className="typewriter-effect">
                        <p className="text1">
                            초록빛 신호를 따라 우주를 탐사하는 수많은 탐사자 중
                            한 명. <br />
                            무한한 우주처럼 저의 가능성을 믿고 세상을
                            탐험합니다.
                        </p>
                    </div>
                    <div className="contact">
                        {/* <p>Contact</p> */}
                        <a href="tel:010-9758-0667">
                            <i class="fa-solid fa-phone"></i>
                        </a>
                        <a href="https://www.instagram.com/d_greenwhiteblackcolor">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="mailto:kheek8@gmail.com">
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
