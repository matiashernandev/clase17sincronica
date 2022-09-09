import React from "react";
import { Link } from "react-router-dom";

function NewGame() {
    return (
        <div>
            <h3>¿Género?</h3>
            <div className="buttons">
                <Link to="/clase17sincronica/character/hombre">
                    <button>Hombre</button>
                </Link>

                <Link to="/clase17sincronica/character/mujer">
                    <button>Mujer</button>
                </Link>
            </div>
        </div>
    );
}

export default NewGame;
