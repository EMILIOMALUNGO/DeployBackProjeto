import prismaClient from "../../prisma";

interface AlterarUsuario{
    id:string
    nome:string
    email:string
   
}

class AlterarUsuarioServices{
   async execute({id,nome,email}:AlterarUsuario){

    await prismaClient.usuario.update({
        where:{
            id:id,
        },
        data:{
            nome:nome,
            email:email,
           
        }       
      
    })
    return {dados:"Usuario Alterado"}
    
   }
}
export{AlterarUsuarioServices}