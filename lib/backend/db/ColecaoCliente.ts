'use client'

import firebase from "@/lib/client/firebase"
import Cliente from "@/lib/models/Cliente"
import ClienteRepositorio from "@/lib/core/ClienteRepositorio"

export default class ColecaoCliente implements ClienteRepositorio {

    conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(
            snapshot: firebase.firestore.QueryDocumentSnapshot,
            options: firebase.firestore.SnapshotOptions
        ): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if (cliente.id) {
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.colecao().add(cliente)
            return new Cliente(cliente.nome, cliente.idade, docRef.id)
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        await this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data())
    }

    private colecao() {
        return firebase
            .firestore()
            .collection('clientes')
            .withConverter(this.conversor)
    }
}
