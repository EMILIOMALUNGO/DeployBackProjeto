import { Request, Response } from "express";
import { CriarItemServices } from "../../Services/Item/CriarItemServices";






class CriarItemController{
    async handle(req:Request, res:Response){
        const {quantidade,preco_unitario,proco_total,ProdutoId,PedidoId}= req.body
        
        const criarItemController = new CriarItemServices()
        const criarItem = await criarItemController.execute({
            quantidade,preco_unitario,proco_total,ProdutoId,PedidoId
        })
        return res.json(criarItem)
    }
}
export {CriarItemController}