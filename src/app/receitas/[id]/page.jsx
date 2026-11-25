"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Receita() {
    const params = useParams();
    const [receita, setReceita] = useState(null);

    useEffect(() => {
        if (params?.id) {
            fetch(`https://dummyjson.com/recipes/${params.id}`)
                .then((res) => res.json())
                .then((data) => setReceita(data))
                .catch((erro) => console.error(erro));
        }
    }, [params?.id]);

    return (
        <main className="detalhe-receita">
            <Link href="/receitas" className="btn-voltar">
                ← Voltar para receitas
            </Link>

            {receita && (
                <>
                    <h1>{receita.name}</h1>
                    <img src={receita.image} alt={receita.name} />
                    <ul>
                        <li><strong>Cozinha:</strong> {receita.cuisine}</li>
                        <li><strong>Dificuldade:</strong> {receita.difficulty}</li>
                        <li><strong>Tempo de preparação:</strong> {receita.prepTimeMinutes} min</li>
                        <li><strong>Tempo de cozimento:</strong> {receita.cookTimeMinutes} min</li>
                        <li><strong>Porções:</strong> {receita.servings}</li>
                        <li><strong>Calorias por refeição:</strong> {receita.caloriesPerServing} kcal</li>
                        <li><strong>Avaliação:</strong> {receita.rating} / 5 ({receita.reviewCount} avaliações)</li>
                        <li><strong>Tipo de refeição:</strong> {receita.mealType?.join(", ")}</li>
                        <li><strong>Ingredientes:</strong> {receita.ingredients?.join(", ")}</li>
                        <li><strong>Instruções de preparo:</strong> {receita.instructions?.join(" ")}</li>
                    </ul>
                </>
            )}
        </main>
    );
}