import Cliente from "../models/Cliente";

export default interface ClienteRepositorio {
    salvar(cliente:Cliente): Promise<Cliente>
}