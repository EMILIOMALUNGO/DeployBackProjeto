import prismaClient from "../../prisma";

interface AlterarCategoria{
    id:string
    nome:string
}

class AlterarCategoriaServices{
    async execute({id,nome}:AlterarCategoria){
    await prismaClient.categoria.update({
        where:{
            id:id
        },data:{
            nome:nome
        }
    })
    return {dados:"categoria foi alterado"}
}
}
export{AlterarCategoriaServices}