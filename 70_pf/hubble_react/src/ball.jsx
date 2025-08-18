import { useEffect, useRef } from "react";

export default function BouncingBalls() {
    const containerRef = useRef(null);
    const ballsRef = useRef([]);

    useEffect(() => {
        const numBalls = 10;
        const colors = [
            "crimson",
            "deepskyblue",
            "limegreen",
            "gold",
            "orange",
            "violet",
        ];
        const balls = [];

        // 컨테이너 크기
        let width = window.innerWidth;
        let height = window.innerHeight;

        // 공 초기 생성
        for (let i = 0; i < numBalls; i++) {
            const size = Math.floor(Math.random() * 30) + 20;
            const ball = document.createElement("div");
            ball.style.position = "absolute";
            ball.style.width = size + "px";
            ball.style.height = size + "px";
            ball.style.borderRadius = "50%";
            ball.style.background =
                colors[Math.floor(Math.random() * colors.length)];
            ball.style.left = Math.random() * (width - size) + "px";
            ball.style.top = Math.random() * (height - size) + "px";
            containerRef.current.appendChild(ball);

            balls.push({
                el: ball,
                x: Math.random() * (width - size),
                y: Math.random() * (height - size),
                dx: (Math.random() - 0.5) * 6,
                dy: (Math.random() - 0.5) * 6,
                size,
            });
        }

        ballsRef.current = balls;

        // 애니메이션 함수
        function animate() {
            ballsRef.current.forEach((ball) => {
                ball.x += ball.dx;
                ball.y += ball.dy;

                // 벽 충돌 체크 (반응형)
                if (ball.x <= 0 || ball.x + ball.size >= width) {
                    ball.dx *= -1;
                }
                if (ball.y <= 0 || ball.y + ball.size >= height) {
                    ball.dy *= -1;
                }

                ball.el.style.transform = `translate(${ball.x}px, ${ball.y}px)`;
            });
            requestAnimationFrame(animate);
        }

        animate();

        // 윈도우 리사이즈 이벤트 → 반응형 처리
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        // cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            balls.forEach((b) => b.el.remove());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                background: "#111",
            }}
        />
    );
}
