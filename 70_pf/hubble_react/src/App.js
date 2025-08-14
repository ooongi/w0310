import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SubPage from "./pages/SubPage";
import './App.css'

function App() {
    return (
        <BrowserRouter>
        <nav className="gnb">
            <Link className="gnb_link" to="/">메인</Link>
            <Link to="/sub">서브</Link>

        </nav>

            <Routes>
                <Route path="/" element={<MainPage/>}></Route>
                <Route path="/sub" element={<SubPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
