import { Request,Response } from "express";
import { ApagarItemServices } from "../../Services/Item/ApagarItemServices";




class ApagarItemController{
    async handle(req:Request,res:Response){
        const {apagar}=req.body
        
      const apagarItemController = new  ApagarItemServices()
      const  apagarItem = await apagarItemController.execute({
        apagar
      })
        return res.json(apagarItem)
    }
}
export{ApagarItemController}

