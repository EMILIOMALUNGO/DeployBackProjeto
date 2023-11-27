import prismaClient from "../../prisma";



interface EditarPedido{
    id:string
}


class EditarPedidoServices{
   async execute({id}:EditarPedido){
    const editarPedido = await prismaClient.pedido.findUnique({
          where:{
            id:id,
          }, select:{
            numero_do_pedido:true,
            ClienteId:true
          }
    })
      return {dados:"O pedido foi editado "}
   }

}

export{EditarPedidoServices}