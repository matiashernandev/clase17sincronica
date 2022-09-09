import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import NewGame from "./pages/NewGame";
import Character from "./pages/Character";
import EndGame from "./pages/EndGame";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/clase17sincronica" element={<NewGame />} />
                <Route
                    path="/clase17sincronica/character/:genero"
                    element={<Character />}
                />
                <Route
                    path="/clase17sincronica/character/:genero/:clase"
                    element={<EndGame />}
                />
            </Routes>
        </div>
    );
}

export default App;
