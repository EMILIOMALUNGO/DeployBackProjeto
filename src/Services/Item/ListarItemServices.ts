import prismaClient from "../../prisma";




class ListarItemServices{
    async execute(){
       
        const listarItem = await prismaClient.item.findMany({})
        return(listarItem)
    }
}
export{ListarItemServices}