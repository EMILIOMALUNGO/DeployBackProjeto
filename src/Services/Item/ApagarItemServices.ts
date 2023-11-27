import prismaClient from "../../prisma";



interface ApagarItem{
    apagar:string
}

class ApagarItemServices{
    async execute({apagar}:ApagarItem){
     
        const ApagarItem = await prismaClient.item.delete({
            where:{
                id:apagar
            },select:{
            quantidade :true, 
            preco_unitario : true,
            proco_total :true,
            ProdutoId : true,
            }
        })
        return {dados:"o item foi excluido"}
    }
}
export{ApagarItemServices}