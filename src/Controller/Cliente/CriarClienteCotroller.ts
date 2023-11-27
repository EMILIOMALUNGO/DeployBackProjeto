import { Request,Response } from "express";
import { CriarClienteServices } from "../../Services/Cliente/CriarClienteServices";


class CriarClienteCotroller{
   async handle(req:Request, res:Response) {

   const {nome, cpf_cnpj, rg_Ie, celular, fixo, rua, complemento ,cep,bairro,cidade, estado} = req.body

   const criarClienteCotroller = new CriarClienteServices()
   const criarCliente = await criarClienteCotroller.execute({
    nome, cpf_cnpj, rg_Ie, celular, fixo, rua, complemento ,cep,bairro,cidade, estado
   })
      return res.json(criarCliente)
   }
}
export{CriarClienteCotroller}