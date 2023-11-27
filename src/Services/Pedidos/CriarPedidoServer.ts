import prismaClient from "../../prisma";


interface CriarPedido{
    numero_do_pedido: string
    ClienteId :string

}



class CriarPedidoServer{
    async execute({numero_do_pedido,ClienteId}:CriarPedido){
       //console.log("serv:",numero_do_pedido,ClienteId )
         
        
       if (!numero_do_pedido ||!ClienteId) {
           throw new Error("Preenche os campos vasios")     
       } 

       const pedido = await prismaClient.pedido.findFirst({
        where:{
            numero_do_pedido:numero_do_pedido,
        }
    })
           if (pedido) {
               throw new Error("este pedido ja voi executado")
      
              }

       
       const CriarPedido = await prismaClient.pedido.create({
    
       
             data:{
                numero_do_pedido:numero_do_pedido,
                ClienteId : ClienteId,

             },select:{
                numero_do_pedido:true,
                ClienteId :true,
             }
            })
           /// console.log(dados)
            return {dados:"Pedido efetuado"}  
              
    }
}
export {CriarPedidoServer}