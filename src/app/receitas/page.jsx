"use client";
import { useEffect, useState } from "react";
import CardReceita from "@/components/CardReceita";

export default function Receitas() {
    const [receitas, setReceitas] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((data) => {
                setReceitas(data.recipes || []);
                setMsgErro("");
            })
            .catch((erro) => setMsgErro(erro.message));
    }, []);

    return (
        <main className="pagina-receitas">
            <h1>Livro de receitas online</h1>
            {msgErro !== "" && <p>Erro: {msgErro}</p>}
            {receitas.length > 0 && (
                <div className="conteiner-receita">
                    {receitas.map((r) => (
                        <CardReceita key={r.id} receita={r} />
                    ))}
                </div>
            )}
        </main>
    );
}