import { Request, Response } from "express";
import { ApagarPedidosServices } from "../../Services/Pedidos/ApagarPedidosServices";



class ApagarPedidosController{
   async handle(req:Request, res:Response){
      const {apagar} = req.body
        
      const apagarPedidosController = new  ApagarPedidosServices ()
      const  apagarPedidos = await  apagarPedidosController.execute({
        apagar
      })
      return res.json(apagarPedidos)
   }

}
export{ApagarPedidosController}