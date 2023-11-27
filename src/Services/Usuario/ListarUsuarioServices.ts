import prismaClient from "../../prisma";




class ListarUsuarioServices{

  async execute(){
    const listarUsuario = await prismaClient.usuario.findMany({})
    
    //console.log(listarUsuario)
    return(listarUsuario)
  }
}
export{ListarUsuarioServices}