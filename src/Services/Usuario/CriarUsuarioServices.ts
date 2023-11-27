import prismaClient from "../../prisma/index";
import { hash } from "bcryptjs";


interface CriarUsuarioa{
    nome:string,
    email:string,
      password:string
}


class CriarUsuarioaServices{
    async execute({nome,email,password}:CriarUsuarioa){
       
        if (!nome || !email || !password) {
            throw new Error ("Preencher os campos vasio")
            
        }

        const usuario = await prismaClient.usuario.findFirst({
            where:{
                email:email,
            }
           
        })
            if (usuario) {
                throw new Error ("Email ja cadastrado ")
                
            }
            const senhaCrypt = await hash(password, 8)
            await prismaClient.usuario.create({
                data:{
                    nome:nome,
                    email:email,
                    senha:senhaCrypt
                },
                select:{
                    nome:true,
                    email:true,
                    senha:true
                }
            })
             return {dados:"usuario cadastrado com sucesso"}

    }

}
export{CriarUsuarioaServices}