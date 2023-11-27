import prismaClient  from "../../prisma";



class ListarProdutoServices{
     async execute(){
       
        const listarProduto = await prismaClient.produto.findMany({})
        return(listarProduto)
     }
}
export {ListarProdutoServices}