import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Abouts from "./pages/Abouts";
import Portfolio from "./pages/PortFolio";
import "./css/Nav.css";
import "./css/Reset.css";
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
                                    <Link to="/about">
                                        Abouts
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/portfolio">
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/portfolio">
                                        Contact
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
    );
}

export default App;
