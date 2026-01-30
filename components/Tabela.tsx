"use client"

import Cliente from "@/lib/models/Cliente";
import { iconeEdicao, iconeLixo } from "./Icones";


interface TabelaProps {
  clientes: Cliente[]
  clienteSelecionado?: (cliente: Cliente) => void
  clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes ? <th className="p-4">Ações</th> : false}
      </tr>
    )
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr key={cliente.id}
          className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}>
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          {exibirAcoes ? renderizarAcoes(cliente) : false}
        </tr>
      )
    })
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="p-4 align-middle">
        <div className="flex justify-center items-center gap-2">
          {props.clienteSelecionado && (
            <button
              onClick={() => props.clienteSelecionado?.(cliente)}
              className="
              flex items-center justify-center
              text-green-600 rounded-full p-2
              hover:bg-purple-50
            "
            >
              {iconeEdicao}
            </button>
          )}

          {props.clienteExcluido && (
            <button
              onClick={() => props.clienteExcluido?.(cliente)}
              className="
              flex items-center justify-center
              text-red-500 rounded-full p-2
              hover:bg-purple-50
            "
            >
              {iconeLixo}
            </button>
          )}
        </div>
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-linear-to-r from-blue-500 to-blue-800
        `}>
        {renderizarCabecalho()}
      </thead>
      <tbody>
        {renderizarDados()}
      </tbody>
    </table>
  );
}
