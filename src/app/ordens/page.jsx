"use client";

import { useState } from "react";

export default function Ordens() {
    const [ordens, setOrdens] = useState([]);

    const [cliente, setCliente] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [descricao, setDescricao] = useState("");

    const [erro, setErro] = useState("");

    function cadastrarOrdem(event) {
        event.preventDefault();

        if (
            cliente.trim() === "" ||
            equipamento.trim() === "" ||
            descricao.trim() === ""
        ) {
            setErro("Preencha todos os campos!");
            return;
        }

        if (descricao.trim().length < 15) {
            setErro("A descrição deve ter no mínimo 15 caracteres!");
            return;
        }

        if (descricao.trim().length > 100) {
            setErro("A descrição deve ter no máximo 100 caracteres!");
            return;
        }

        const novaOrdem = {
            id: Date.now(),
            cliente: cliente.trim(),
            equipamento: equipamento.trim(),
            descricao: descricao.trim(),
            status: "Aberta",
        };

        setOrdens([...ordens, novaOrdem]);

        setCliente("");
        setEquipamento("");
        setDescricao("");
        setErro("");
    }

    function fecharOrdem(id) {
        const ordensAtualizadas = ordens.map((ordem) => {
            if (ordem.id === id) {
                return { ...ordem, status: "Fechada" };
            }
            return ordem;
        });

        setOrdens(ordensAtualizadas);
    }

    return (
        <main className="container">
            <style>{`
                .container {
                    max-width: 1150px;
                    margin: 30px auto;
                    padding: 25px;
                    font-family: Arial, sans-serif;
                }
                .topo-ordens {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #1e3a8a;
                    color: white;
                    padding: 18px 25px;
                    border-radius: 10px;
                    margin-bottom: 25px;
                }
                .topo-ordens h1 {
                    margin: 0;
                    font-size: 24px;
                }
                .topo-ordens p {
                    margin: 0;
                    background-color: #1d4ed8;
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: bold;
                }
                .layout-duas-colunas {
                    display: flex;
                    gap: 25px;
                    align-items: flex-start;
                }
                .coluna-formulario {
                    flex: 1;
                    background-color: #f8fafc;
                    padding: 22px;
                    border: 1px solid #cbd5e1;
                    border-radius: 10px;
                }
                .coluna-formulario h2,
                .coluna-tabela h2 {
                    margin-top: 0;
                    color: #1e3a8a;
                    font-size: 19px;
                    margin-bottom: 15px;
                }
                .coluna-tabela {
                    flex: 1.5;
                    background-color: #ffffff;
                    padding: 22px;
                    border: 1px solid #cbd5e1;
                    border-radius: 10px;
                }
                .linha-dupla {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .campo {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }
                .container form {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .container label {
                    font-weight: bold;
                    font-size: 14px;
                    color: #334155;
                }
                .container input,
                .container textarea {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 10px;
                    border: 1px solid #94a3b8;
                    border-radius: 6px;
                    font-size: 15px;
                }
                .container textarea {
                    min-height: 90px;
                    resize: vertical;
                }
                .contador {
                    margin: -4px 0 4px 0;
                    text-align: right;
                    color: #64748b;
                    font-size: 13px;
                }
                .container button {
                    padding: 11px 16px;
                    border: none;
                    border-radius: 6px;
                    background: #1e3a8a;
                    color: white;
                    cursor: pointer;
                    font-size: 15px;
                    font-weight: bold;
                }
                .container button:hover {
                    background: #1d4ed8;
                }
                .erro {
                    color: #b91c1c;
                    background-color: #fee2e2;
                    padding: 8px 12px;
                    border-radius: 6px;
                    font-weight: bold;
                    font-size: 14px;
                    margin: 0;
                }
                .vazio {
                    padding: 30px;
                    background-color: #f8fafc;
                    border: 1px dashed #94a3b8;
                    border-radius: 8px;
                    text-align: center;
                    color: #64748b;
                }
                .container table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .container th,
                .container td {
                    border: 1px solid #cbd5e1;
                    padding: 10px 12px;
                    text-align: left;
                    font-size: 14px;
                }
                .container th {
                    background: #1e3a8a;
                    color: white;
                }
                .container tr:nth-child(even) {
                    background: #f1f5f9;
                }
            `}</style>

            <header className="topo-ordens">
                <h1>Controle de Ordens de Serviço</h1>
                <p>Total cadastradas: {ordens.length}</p>
            </header>

            <div className="layout-duas-colunas">
                <section className="coluna-formulario">
                    <h2>Nova Ordem</h2>

                    <form onSubmit={cadastrarOrdem}>
                        <div className="linha-dupla">
                            <div className="campo">
                                <label htmlFor="cliente">Cliente:</label>
                                <input
                                    type="text"
                                    id="cliente"
                                    placeholder="Nome do cliente"
                                    value={cliente}
                                    onChange={(e) => setCliente(e.target.value)}
                                />
                            </div>

                            <div className="campo">
                                <label htmlFor="equipamento">Equipamento:</label>
                                <input
                                    type="text"
                                    id="equipamento"
                                    placeholder="Ex.: Notebook"
                                    value={equipamento}
                                    onChange={(e) => setEquipamento(e.target.value)}
                                />
                            </div>
                        </div>

                        <label htmlFor="descricao">Descrição do Problema:</label>
                        <textarea
                            id="descricao"
                            placeholder="Descreva o problema (15 a 100 caracteres)"
                            value={descricao}
                            maxLength={100}
                            onChange={(e) => setDescricao(e.target.value)}
                        />

                        <p className="contador">{descricao.length}/100 caracteres</p>

                        {erro !== "" && <p className="erro">{erro}</p>}

                        <button type="submit">Cadastrar Ordem</button>
                    </form>
                </section>

                <section className="coluna-tabela">
                    <h2>Ordens Cadastradas</h2>

                    {ordens.length === 0 ? (
                        <p className="vazio">Nenhuma ordem cadastrada ainda.</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Cliente</th>
                                    <th>Equipamento</th>
                                    <th>Descrição</th>
                                    <th>Status</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ordens.map((ordem) => (
                                    <tr key={ordem.id}>
                                        <td>{ordem.cliente}</td>
                                        <td>{ordem.equipamento}</td>
                                        <td>{ordem.descricao}</td>
                                        <td>{ordem.status}</td>
                                        <td>
                                            {ordem.status === "Aberta" ? (
                                                <button
                                                    type="button"
                                                    onClick={() => fecharOrdem(ordem.id)}
                                                >
                                                    Fechar Ordem
                                                </button>
                                            ) : (
                                                <span>Finalizada</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </section>
            </div>
        </main>
    );
}