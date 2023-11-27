import prismaClient from "../../prisma";

interface EditarCliente{
    id:string
}

class EditarClienteServices{
   async execute ({id}:EditarCliente){
      const EditarCliente = await prismaClient.cliente.findMany({
        where:{
            id:id
        },select:{
            id  :true,       
            nome :true,      
            cpf_cnpj: true,   
            rg_Ie : true,
            celular:true,    
            fixo : true,      
            rua :true,       
            complemento :true,
            cep : true,       
            bairro :true,     
            cidade :true,    
            estado :true, 
        }
      })
        return{dados:" Cliente é ditado com suceddo"}
   }

}
export{EditarClienteServices}
