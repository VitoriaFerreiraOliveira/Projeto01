import Link from "next/link";

export default function CardReceita({ receita }) {
    return (
        <div className="wrap-receita">
            <img src={receita.image} alt={receita.name} />
            <h3>{receita.name}</h3>
            <Link href={`/receitas/${receita.id}`}>Saiba mais</Link>
        </div>
    );
}