import prismaClient from "../../prisma";




class ListarPedidoServices{
    async execute(){
        const listarPedido = await prismaClient.pedido.findMany({})
        return (listarPedido)
    }

}
export {ListarPedidoServices}