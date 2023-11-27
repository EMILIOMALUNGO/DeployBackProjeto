import { Request,Response } from "express"
import { AlterarIntemServices } from "../../Services/Item/AlterarIntemServices"




class AlterarItemController{
  async handle(req:Request,res:Response){

    const{id,quantidade,preco_unitario,proco_total,ProdutoId}=req.body

    const alterarItemController = new  AlterarIntemServices()
    const  AlterarIntem = await alterarItemController.execute({
        id,quantidade,preco_unitario,proco_total,ProdutoId
     
    })
    return res.json(AlterarIntem)
  }
}
export{AlterarItemController}