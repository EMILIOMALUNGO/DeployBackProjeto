import { Request,Response } from "express";
import { AlterarPedidoServices } from "../../Services/Pedidos/AlterarPedidoServices";



class AlterarPedidoController{
    async handle(req:Request, res:Response){
        const {id,numero_do_pedido,ClienteId} = req.body

        const alterarPedidoController = new AlterarPedidoServices()
        const alterarPedidos = await alterarPedidoController.execute({
            id,numero_do_pedido,ClienteId
        })
         return res.json(alterarPedidos)         
    }
}
export{AlterarPedidoController}