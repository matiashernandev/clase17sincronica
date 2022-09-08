import React from "react";
import { Link, useParams } from "react-router-dom";
import hombre from "../assets/images/hombre.webp";
import mujer from "../assets/images/mujer.jpg";

function Character() {
    const { genero } = useParams();
    return (
        <div
            className="container"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h1>{`El género de tu personaje es ${genero}`}</h1>
            <img
                width="200px"
                height="300px"
                style={{ objectFit: "contain" }}
                src={genero === "hombre" ? hombre : mujer}
                alt={`${genero}`}
            />
            <h3>¿Clase de tu personaje?</h3>
            <div className="buttons">
                <Link to={`/character/${genero}/warrior`}>Warrior</Link>
            </div>
            <div className="buttons">
                <Link to={`/character/${genero}/mage`}>Mage</Link>
            </div>
            <div className="buttons">
                <Link to={`/character/${genero}/ranger`}>Ranger</Link>
            </div>

            <Link id="gameButton" to="/">
                <button>Atras</button>
            </Link>
        </div>
    );
}

export default Character;
