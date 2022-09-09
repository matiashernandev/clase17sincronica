import React from "react";
import { Link, useParams } from "react-router-dom";
import hombre from "../assets/images/hombre.webp";
import mujer from "../assets/images/mujer.jpg";
import styles from "../styles/Character.module.css";

function Character() {
    const { genero } = useParams();
    return (
        <div>
            <h1>{`El género de tu personaje es ${genero}`}</h1>
            <img
                className={styles.img}
                src={genero === "hombre" ? hombre : mujer}
                alt={`Esto no está optimizado`}
            />
            <h3>¿Clase de tu personaje?</h3>
            <div className="buttons">
                <Link to={`/clase17sincronica/character/${genero}/warrior`}>
                    Warrior
                </Link>
            </div>
            <div className="buttons">
                <Link to={`/clase17sincronica/character/${genero}/mage`}>
                    Mage
                </Link>
            </div>
            <div className="buttons">
                <Link to={`/clase17sincronica/character/${genero}/ranger`}>
                    Ranger
                </Link>
            </div>

            <Link id="gameButton" to="/clase17sincronica">
                <button>Atras</button>
            </Link>
        </div>
    );
}

export default Character;
