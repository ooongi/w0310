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
                        <div className="text2">
                            <div>
                                <h3>학력</h3>
                                <p>서경대학교 시각정보디자인학과 학사 졸업</p>
                                <p>이천양정여자고등학교 졸업</p>
                            </div>
                            <div>
                                <h3>기술 스택</h3>
                                <p>HTML CSS JavaScript JQuery React</p>
                                <p>Photoshop Illustator Figma Procreate</p>
                                <p>ChatGPT Claude.ai</p>
                            </div>
                            <div>
                                <h3>자격증</h3>
                                <p>GTQ GTQi 웹디자인개발기능사</p>
                            </div>
                            <div>
                                <h3>포트폴리오</h3>
                                <div className="port">
                                    <p><a href="https://notefolio.net/gwbc" target="_blank">notefolio</a></p><p><a href="https://www.instagram.com/d_greenwhiteblackcolor" target="_blank">instargram</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className="contact">
                        {/* <p>Contact</p> */}
                        <a href="tel:010-9758-0667">
                            <i class="fa-solid fa-phone"></i>
                        </a>
                        <a href="https://www.instagram.com/d_greenwhiteblackcolor" target="_blank">
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
