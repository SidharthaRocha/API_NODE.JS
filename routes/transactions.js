const express = require('express'); // Importa o framework Express 
const router = express.Router(); // Cria um novo roteador 
const transactionsController = require('../controllers/transactionsController'); // Importa o controlador de transações 
const authMiddleware = require('../middlewares/authMiddleware'); // Importa o middleware de autenticação 
// Definindo uma rota para obter todas as transações (protegida) 
router.get('/', authMiddleware, transactionsController.getAllTransactions); 
// Definindo uma rota para adicionar uma nova transação (protegida) 
router.post('/', authMiddleware, transactionsController.addTransaction); 
// Definindo uma rota para atualizar uma transação existente (substituição completa) (protegida) 
router.put('/:id', authMiddleware, transactionsController.updateTransactionPut); 
// Definindo uma rota para atualizar uma transação existente (atualização parcial) (protegida) 
router.patch('/:id', authMiddleware, transactionsController.updateTransactionPatch); 
// Definindo uma rota para deletar uma transação existente (protegida) 
router.delete('/:id', authMiddleware, transactionsController.deleteTransaction); 
// Exportando o roteador 
module.exports = router;