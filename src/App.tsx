import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Opening } from "./pages/opening";
import { FirstExplanation } from "./pages/explanation";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Opening />} />
                <Route
                    path="/explanation/first_explanation"
                    element={<FirstExplanation />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
