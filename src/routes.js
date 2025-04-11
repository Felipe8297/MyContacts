const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');

const router = Router();

// O código passa por todos os middlewares, caso não haja um return no meio do código, o código continua a ser executado até chegar na rota.

// Se for tratar algum dado de um middleware, é necessário tomar cuidado com a ordem dos middlewares.
// Por exemplo, os dados do middleware 1 são tratados no middleware 2, e os dados do middleware 2 são tratados no middleware 3, e assim por diante.

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);
router.delete('/contacts/:id', ContactController.delete);

module.exports = router;
