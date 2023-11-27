import prismaClient from "../../prisma";


interface AlterarIntem{
    id           : string
    quantidade    : string 
    preco_unitario : string
    proco_total  : string
    ProdutoId : string
   
}

class AlterarIntemServices{
   async execute({id,quantidade,preco_unitario,proco_total,ProdutoId,}:AlterarIntem){

       const AlterarIntem = await prismaClient.item.update({
        where:{
              id:id,
        },data:{
            quantidade    : quantidade, 
            preco_unitario : preco_unitario,
            proco_total  : proco_total,
            ProdutoId : ProdutoId,
           
        }
        
       })

       return{dados:"um item foi alterado"}
   }

}
export{AlterarIntemServices}