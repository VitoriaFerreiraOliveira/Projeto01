"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
import registros from "@/registros.json"

export default function receita(){
    const params = useParams();
    const [receita, setReceitas] = useState();

    useEffect ( ()=> {
        if (params?.id);
        const receitaEncontrada = registros.find(r => r.id == params.id)
        setReceitas(receitaEncontrada);
    }, [] )

    return(
        <main>
            {receita && <>
            <h1>{receita.name}</h1>
            <img src={receita.imagem} alt="" />
            <ul>
                <li>Ingredientes: {receita.ingredients}</li>
                <li>Instruções: {receita.intructions}</li>
                <li>Tempo de preparação: {receita.prepTimeMinutes}</li>
                <li>Tempo de cozimento: {receita.cookTimeMinutes}</li>
                <li>Dificuldade: {receita.difficulty}</li>
                <li>Tipo de refeição: {receita.mealType}</li>
                <li>Cozinha: {receita.cuisine}</li>
                <li>Calorias por refeição: {receita.caloriesPerServing}</li>
            </ul>
            </>}
        </main>
    )
}