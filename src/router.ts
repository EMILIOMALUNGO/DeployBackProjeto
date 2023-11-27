import { Router } from "express";
import multer from "multer";
import uploadConfig from './config/multer'

import { isAutenticado } from "./middleware/isAutenticado";

import { LoginUsuarioControlles } from "./Controller/Loguin/LoginUsuarioControlles";

import { CriarUsuarioController } from "./Controller/Usuario/CriarUsuarioController";
import { ListarUsuarioController } from "./Controller/Usuario/ListarUsuarioController";
import { EditarUsuarioController } from "./Controller/Usuario/EditarUsuarioController";
import { AlterarUsuarioController } from "./Controller/Usuario/AlterarUsuarioController";
import { ApagarUsuarioController } from "./Controller/Usuario/ApagarUsuarioController";

import { CriarProdutoController } from "./Controller/Produto/CriarProdutoController";
import { ListarProdutoController } from "./Controller/Produto/ListarProdutoController";
import { EditarProdutoController } from "./Controller/Produto/EditarProdutoController";
import { AlterarProdutoController } from "./Controller/Produto/AlterarProdutoController";
import { ApagarProdutoController } from "./Controller/Produto/ApagarProdutoController";

import { CriarItemController } from "./Controller/Item/CriarItemController";
import { ListarItemControler } from "./Controller/Item/ListarItemControler";
import { EditarItemController } from "./Controller/Item/EditarItemController";
import { AlterarItemController } from "./Controller/Item/AlterarItemController";
import { ApagarItemController } from "./Controller/Item/ApagarItemController";


import { CriarClienteCotroller } from "./Controller/Cliente/CriarClienteCotroller";
import { ListarClienteContreller } from "./Controller/Cliente/ListarClienteContreller";
import { EditarClienteController } from "./Controller/Cliente/EditarClienteController";
import { AlterarClienteController } from "./Controller/Cliente/AlterarClienteController";
import { ApagarClienteController } from "./Controller/Cliente/ApagarClienteController";

import { CriarPedidosController } from "./Controller/Pedidos/CriarPedidosController";
import { ListarPedidoController } from "./Controller/Pedidos/ListarPedidoController";
import { EditarPedidoController } from "./Controller/Pedidos/EditarPedidoController";
import { AlterarPedidoController } from "./Controller/Pedidos/AlterarPedidoController";
import { ApagarPedidosController } from "./Controller/Pedidos/ApagarPedidosController";


import { CriarPagamentocontroller } from "./Controller/Pagamento/CriarPagamentocontroller";
import { ListarPagamentosController } from "./Controller/Pagamento/ListarPagamentosController";
import { EditarPagamentoController } from "./Controller/Pagamento/EditarPagamentoController";
import { AlterarPagamentoController } from "./Controller/Pagamento/AlterarPagamentoController";
import { ApagarPagamentoController } from "./Controller/Pagamento/ApagarPagamentoController";


import { CriarCategoriaController } from "./Controller/Categoria/CriarCategoriaController";
import { ListarCategoriasController } from "./Controller/Categoria/ListarCategoriaController";
import { EditarCategoriaController } from "./Controller/Categoria/EditarCategoriaController";
import { AlterarCategoriaController } from "./Controller/Categoria/AlterarCategoriaController";
import { ApagarCategoriaController } from "./Controller/Categoria/ApagarCategoriaController";



const router = Router()

const upload = multer(uploadConfig.upload('./tmp'))

// criar os EndPoint das minhas Login
router.post("/loginUsuario",new LoginUsuarioControlles().handle)

// criar os EndPoint das minhas usuario
 router.post("/criarUsuario", new  CriarUsuarioController().handle )
 router.get("/ListarUsuario",isAutenticado, new  ListarUsuarioController().handle )
 router.get ("/editarUsuario/:id",isAutenticado,  new EditarUsuarioController().handle )
 router.put('/alterarUsuario',isAutenticado,  new AlterarUsuarioController().handle)
 router.delete('/apagarUsuario',isAutenticado,  new  ApagarUsuarioController().handle)
 
 // // criar os EndPoint dos Produto
 router.post("/criarProduto" ,isAutenticado, upload.single('file'),new   CriarProdutoController().handle) 
 router.get("/listarProduto",isAutenticado,  new ListarProdutoController().handle)
 router.get("/editarProduto",isAutenticado, new EditarProdutoController().handle)
 router.put("/alterarProduto",isAutenticado,  new AlterarProdutoController().handle)
 router.delete("/apagarProduto",isAutenticado, new ApagarProdutoController().handle)

 // // criar os EndPoint dos Item

  router.post("/criarItem",isAutenticado, new CriarItemController().handle)
  router.get("/listarItem",isAutenticado, new ListarItemControler().handle)
  router.get("/EditarItem",isAutenticado,new EditarItemController().handle)
  router.put("/alterarItem",isAutenticado,new AlterarItemController().handle)
  router.delete("/apagarItem",isAutenticado,new  ApagarItemController().handle)



 // criar os EndPoint dos Cliente 
 router.post("/criarCliente",new CriarClienteCotroller().handle)
router.get ("/listarCliente", isAutenticado, new  ListarClienteContreller().handle)
router.get ("/editarCliente/:id", isAutenticado, new EditarClienteController().handle)
router.put ('/alterarCliente', isAutenticado, new AlterarClienteController().handle)
router.delete('/apagarCliente', isAutenticado, new ApagarClienteController().handle)



// // criar os EndPoint dos Pedido
router.post("/CriarPedidos",isAutenticado,  new CriarPedidosController().handle)
router.get("/listarPedido",isAutenticado, new  ListarPedidoController().handle)
router.get('/editarPedido',isAutenticado,  new EditarPedidoController().handle)
router.put("/alterarPedido",isAutenticado,  new AlterarPedidoController().handle)
router.delete("/apagarPedido",isAutenticado, new ApagarPedidosController().handle)


// // criar os EndPoint dos Pagamento
router.post("/criarPagamento",isAutenticado,  new CriarPagamentocontroller().handle)
router.get('/listarPagamento',isAutenticado,  new ListarPagamentosController().handle)
router.get('/editarPagamento/:id',isAutenticado, new EditarPagamentoController().handle)
router.put("/alterarPagamento",isAutenticado,  new AlterarPagamentoController().handle)
router.delete("/ApagarPagamento",isAutenticado, new  ApagarPagamentoController().handle)


// // criar os EndPoint dos Categoria 
router.post("/CriarCategoria",isAutenticado, new CriarCategoriaController().handle)
router.get('/listarCategoria',isAutenticado, new ListarCategoriasController().handle)
router.get('/editarCategoria/:id',isAutenticado, new EditarCategoriaController().handle)
router.put("/alterarCategoria",isAutenticado, new AlterarCategoriaController().handle)
router.delete("/apagarCategoria",isAutenticado, new  ApagarCategoriaController().handle)


export {router}