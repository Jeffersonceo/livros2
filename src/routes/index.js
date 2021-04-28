const express = require('express');
const router = express.Router();
const BibliotecaController = require('../controllers/BibliotecaController');
const usersController = require("../controllers/usersController");

const multer = require('multer');


const parser = multer( { 
  storage: multer.diskStorage( {
    destination: 'public/imgs',
    filename(req, file, callback) {
      callback(null, file.originalname);
    }
  }) 
})
//HOME
router.get('/', (req, res) => res.redirect('/index'));
//INDEX
router.get('/index', BibliotecaController.index);
//LIVROS
router.get('/cadastrar', BibliotecaController.cadastrar);
router.post('/cadastrar/action', parser.single("image"), BibliotecaController.cadastrarLivros);

//USUARIOS
router.get('/signup', usersController.index);
router.post('/signup', usersController.save);

//BUSCAR
router.get('/buscar', BibliotecaController.buscar);



module.exports = router;
