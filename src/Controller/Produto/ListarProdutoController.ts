import { Request, Response } from "express";
import { ListarProdutoServices } from "../../Services/Produto/ListarProdutoServices";



class ListarProdutoController{
    async handle(req:Request, res:Response){
       
       const listarProdutoController = new  ListarProdutoServices()
       const  listarProduto = await listarProdutoController.execute()
       return res.json(listarProduto) 
    }
 
}
export {ListarProdutoController}