import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewGame from "./pages/NewGame";
import Character from "./pages/Character";
import EndGame from "./pages/EndGame";

function App() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Routes>
                <Route path="/" element={<NewGame />} />
                <Route path="/character/:genero" element={<Character />} />
                <Route path="/character/:genero/:clase" element={<EndGame />} />
            </Routes>
        </div>
    );
}

export default App;
