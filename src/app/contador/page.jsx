"use client";

import { useState, useEffect } from "react";

export default function Contador() {
    const [contador, setContador] = useState(0);

    function addUmContador() {
        if (contador < 100) {
            setContador(contador + 1);
        } else {
            alert("Você atingiu o limite máximo de 100!");
        }
    }

    function diminuirContador() {
        if (contador > -5) {
            setContador(contador - 1);
        } else {
            alert("Você atingiu o limite mínimo de -5!");
        }
    }

    useEffect(() => console.log(contador), [contador]);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", gap: "15px", fontFamily: "Arial, sans-serif" }}>
            <h1>Desenvolvendo contador</h1>
            <p style={{ fontSize: "40px", fontWeight: "bold", margin: "10px 0" }}>{contador}</p>

            <div style={{ display: "flex", gap: "10px" }}>
                <button
                    type="button"
                    onClick={diminuirContador}
                    style={{ padding: "10px 20px", fontSize: "18px", cursor: "pointer", backgroundColor: "#ca0303", color: "white", border: "none", borderRadius: "6px" }}
                >
                    -
                </button>
                <button
                    type="button"
                    onClick={addUmContador}
                    style={{ padding: "10px 20px", fontSize: "18px", cursor: "pointer", backgroundColor: "#16a34a", color: "white", border: "none", borderRadius: "6px" }}
                >
                    +
                </button>
            </div>
        </div>
    );
}