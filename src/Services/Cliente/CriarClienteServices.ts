import prismaClient from "../../prisma";

interface CriarCliente{
    nome  :      string
    cpf_cnpj:    string
    rg_Ie:       string
    celular:     string
    fixo:        string
    rua:         string
    complemento: string
    cep:         string
    bairro:      string
    cidade :     string
    estado:      string
    
}

class CriarClienteServices{
   async execute({nome, cpf_cnpj, rg_Ie, celular, fixo, rua, complemento ,cep,bairro,cidade, estado}:CriarCliente){

    if (!nome || !cpf_cnpj || !rg_Ie || !celular|| !fixo || !rua ||!complemento || !cep || !bairro|| !cidade ||! estado) {

        throw new Error("Preencha os campos vasio")        
    }
      const criarCliente = await prismaClient.cliente.findFirst({
        where:{
            OR:[
              {
                  cpf_cnpj:cpf_cnpj
              },
              {
                  rg_Ie:rg_Ie
              }

            ]}
            
        })
        
        if (criarCliente) {
            throw new Error('CPF/CNPJ - RG/IE já esta cadastrado')
    }
        await prismaClient.cliente.create({
            data:{
                nome :  nome,  
                cpf_cnpj: cpf_cnpj,
                rg_Ie:  rg_Ie,       
                celular: celular,  
                fixo:    fixo,        
                rua:      rua,  
                complemento:complemento,
                cep: cep,
                bairro: bairro,
                cidade :    cidade ,    
                estado:    estado,   
            }
        })
        return {dados:"cliente salvo com sucesso"}
   }

}
export{CriarClienteServices}