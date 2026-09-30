"use client";
import { useEffect, useState } from "react";
import registros from "@/registros.json"

export default function Receitas(){

    const [receitas, setReceitas] = useState([]);
    const [msgErro, setMsgErro] = useState("");
    
    useEffect( ()=> {
        fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setReceitas(registros);
            setMsgErro("");
        })
        .catch(erro => setMsgErro(erro.message))
    }, [] );

    return(
        <main>
            <h1>Livro de receitas online</h1>
            {msgErro != "" && <p>Erro: {msgErro}</p>}
            {receitas.length > 0 && 
            <div className="conteiner-receita">
                {receitas.map(r => {
                    return(
                        <div key={r.id} className="wrap-receita">
                            <img src={r.image} alt="" />
                            <h3>{r.name}</h3>
                            <a href={`/receitas/${r.id}`}>Saíba mais</a>
                        </div>
                    )
                })}
            </div>
            }
        </main>
    )
}