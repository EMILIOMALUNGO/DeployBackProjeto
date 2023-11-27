import { Request, Response } from "express";
import { AlterarCategoriaServices } from "../../Services/Categoria/AlterarCategoriaServices";


class AlterarCategoriaController{
   async handle(req:Request, res:Response){
    const {id,nome}=req.body
      
     const alterarCategoriaController = new AlterarCategoriaServices()
     const AlterarCategoria = await alterarCategoriaController.execute({
       id,nome
     })
      return res.json(AlterarCategoria) 
   }
}
export{AlterarCategoriaController}