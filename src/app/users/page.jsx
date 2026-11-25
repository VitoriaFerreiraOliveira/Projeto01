"use client";

import { useState, useEffect } from "react";

export default function Users() {
    const [listaUser, setListaUser] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then((data) => {
                setListaUser(data.users || []);
                setMsgErro("");
            })
            .catch((erro) => setMsgErro(erro.message));
    }, []);

    return (
        <main>
            <h1>Informações dos users</h1>
            {msgErro !== "" && <p>Erro: {msgErro}</p>}
            {listaUser.length > 0 ? (
                <div>
                    {listaUser.map((user) => (
                        <div key={user.id}>
                            <h3>{user.firstName} {user.lastName}</h3>
                            <img src={user.image} alt={user.firstName} />
                            <p>Nascimento: {user.birthDate}</p>
                            <p>Cidade: {user.address?.city}</p>
                            <p>Telefone: {user.phone}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Sem users no momento, tente mais tarde!!</div>
            )}
        </main>
    );
}