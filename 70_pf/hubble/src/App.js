import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SubPage from "./pages/SubPage";
import "./css/Nav.css";
import logoImg from "./images/logo.png";

function App() {
    return (
        <BrowserRouter>
            <div>
                <header id="header">
                    <div className="nav">
                        <Link to="/" className="logo">
                                <img src={logoImg} alt="허블"></img>
                        </Link>
                        <div>
                            <ul className="nav-sub">
                                <li>
                                    <Link to="/">
                                        허블 소개
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/sub">
                                        출간 도서
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/sub">
                                        제 8회 한국과학문학상
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/sub">
                                        독자 문의
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/sub" element={<SubPage />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
