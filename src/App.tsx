import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Opening } from "./pages/opening";
import { Explanation } from "./pages/explanation";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Opening />} />
                <Route path="/explanation" element={<Explanation />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
