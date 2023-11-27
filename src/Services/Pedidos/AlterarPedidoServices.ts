import prismaClient from "../../prisma";



interface AlterarPedido{
    id:string
    numero_do_pedido:string,
    ClienteId:string
}

class AlterarPedidoServices{
    async execute({id,numero_do_pedido,ClienteId}:AlterarPedido){
        const AlterarPedido = await prismaClient.pedido.update({
            where:{
                id:id,
            },data:{
                numero_do_pedido:numero_do_pedido,
                ClienteId:ClienteId
            }

        })
          return {dados:"Pedidos alterado com sucesso"}
    }
}
export {AlterarPedidoServices}