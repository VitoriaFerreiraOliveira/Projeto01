"use client";

import { useState, useEffect } from "react";

export default function users(){

    const [listaUser, setListaUser] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect (() => {
        fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setListaUser(data.results);
            setMsgErro("");
        })
        .catch(erro => setMsgErro(erro.message))
    }, []);
    return(
        <>
        <main>
            <h1>Informações dos users</h1>
            {msgErro != "" && <p>Erro: {msgErro}</p>}
            {listaUser.length > 0 ?
            <div>
                {listaUser.map((user)=> {
                    return(
                        <>
                        <div key={id}>
                            <h3>{user.name.first}{""}{user.name.last}</h3>
                            <img src={user.image} alt=""/>
                            <p>{user.birthDate}</p>
                            <p>{user.address.city}</p>
                            <p>{user.phone
                                
                                }</p>
                        </div>
                        </>
                    )
                })}
            </div>
            :
            <div>
                Sem users no momento, tente mais tarde!!
            </div>}
        </main>
        </>
    )
}