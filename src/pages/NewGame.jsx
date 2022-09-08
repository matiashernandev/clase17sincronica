import React from "react";
import { Link } from "react-router-dom";

function NewGame() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h3>¿Género?</h3>
            <div className="buttons">
                <Link to="/character/hombre">
                    <button>Hombre</button>
                </Link>

                <Link to="/character/mujer">
                    <button>Mujer</button>
                </Link>
            </div>
        </div>
    );
}

export default NewGame;
