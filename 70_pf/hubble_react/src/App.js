import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Abouts from "./pages/Abouts";
import Portfolio from "./pages/PortFolio";
import "./css/Nav.css";
import "./css/Reset.css";
import "./css/Footer.css";
import logoImg from "./images/logo.png";

function App() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <header id="header">
                        <div className="nav">
                            <Link to="/" className="logo">
                                    <img src={logoImg} alt="허블"/>
                            </Link>
                            <div>
                                <ul className="nav-sub">
                                    <li>
                                        <Link to="/about">
                                            Abouts
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/portfolio">
                                            Portfolio
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>
                    <Routes>
                        <Route path="/" element={<Portfolio />}></Route>
                        <Route path="/portfolio" element={<Portfolio />}></Route>
                        <Route path="/about" element={<Abouts />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
            <footer className="footer">
                <div className="footer_area">
                    <p>&copy; KHK All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
