import prismaClient from "../../prisma";



interface ApagarPedidos{
    apagar:string
}

class ApagarPedidosServices{
    async execute({apagar}:ApagarPedidos){
       // console.log("ser:",apagar)
        const apagarPedidos = await prismaClient.pedido.delete({
            where:{
                id:apagar
            }
        })
        return {dados:"O pedido foi excluido"}
    }
}
export{ApagarPedidosServices}