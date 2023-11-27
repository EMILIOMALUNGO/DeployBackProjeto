import { Response,Request } from "express";
import { CriarUsuarioaServices } from "../../Services/Usuario/CriarUsuarioServices";


class CriarUsuarioController{
   async handle (req:Request, res:Response){
       
    const {nome,email,password}= req.body
   // console.log(nome,email,password)
    
    if (!nome|| !email || !password) {
        throw new Error("tem campos vasio no controler")     
    }
        const criarUsuarioacontroller = new  CriarUsuarioaServices()
        const  CriarUsuario = await criarUsuarioacontroller.execute({
           
             nome,
             email,
             password
        })

        return res.json(CriarUsuario)
   }


}
export{CriarUsuarioController}
