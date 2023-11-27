import prismaClient from "../../prisma";


interface CriarCategiria{
    nome:string
}

class CriarCategiriaServices{
    async execute({nome}:CriarCategiria){
       if (!nome) {
        throw new Error("preeche o campo vasio")
        }
       const CriarCategiria = await prismaClient.categoria.create({
            data:{
                nome:nome
            },
            select:{
                nome:true
            }
            
       }) 
        
       return {dados:"categoria criada"}
    }
}
export{CriarCategiriaServices}