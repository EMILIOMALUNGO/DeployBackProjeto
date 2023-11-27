
import { Request,Response } from "express"; 
import { AlterarUsuarioServices } from "../../Services/Usuario/AlterarUsuarioServices";


class AlterarUsuarioController{
   async handle (req:Request, res:Response){
      
    const {id,nome,email} = req.body

    const alterarUsuarioController = new AlterarUsuarioServices()
    const alterarUsuario  = alterarUsuarioController.execute({
        id, nome, email
    })
 
        return res.json(alterarUsuario)
   }


}
export{AlterarUsuarioController}

