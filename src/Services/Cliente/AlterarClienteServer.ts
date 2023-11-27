import prismaClient from "../../prisma";

interface AlterarCliente{
    id :string
    nome:string       
    cpf_cnpj:string   
    rg_Ie  :string    
    celular :string   
    fixo  :string     
    rua  :string      
    complemento :string
    cep  :string       
    bairro :string    
    cidade :string    
    estado :string    
}


class AlterarClienteServer{
   async execute ({id,nome,cpf_cnpj,rg_Ie,celular,fixo,rua,complemento,cep,bairro,cidade,estado}:AlterarCliente){
         
       await prismaClient.cliente.update({
        where:{
            id :id ,
        },
        data:{
            nome:nome,   
            cpf_cnpj:cpf_cnpj,  
            rg_Ie :  rg_Ie,      
            celular:celular,    
            fixo :fixo,      
            rua  : rua,     
            complemento:complemento, 
            cep  : cep,     
            bairro : bairro,   
            cidade : cidade,   
            estado: estado
        }
  
      })
       return {dados:"dados do cliente Alterado"}
   }
}
export {AlterarClienteServer}