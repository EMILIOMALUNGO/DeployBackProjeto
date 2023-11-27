import prismaClient from "../../prisma";



interface CriarItem{
    quantidade : string         
    preco_unitario :string      
    proco_total :string
    ProdutoId :string
    PedidoId  :string
}  

class CriarItemServices{
    async execute({quantidade,preco_unitario,proco_total,ProdutoId,PedidoId}:CriarItem){

        if (!quantidade ||!preco_unitario||!proco_total||!ProdutoId||!PedidoId) {
            throw new Error("Preencha os campos vasios")    
        }

        const CriarItem = await prismaClient.item.create({
            data:{
                quantidade :quantidade,        
                preco_unitario :preco_unitario,     
                proco_total :proco_total,
                ProdutoId :ProdutoId,
                PedidoId  :PedidoId
            }, select:{
                quantidade :true,        
                preco_unitario :true,     
                proco_total :true,
                ProdutoId :true,
                PedidoId  :true
            }
        })
         return {dados:"item esta no carrinho"}
    }

}
export{CriarItemServices}