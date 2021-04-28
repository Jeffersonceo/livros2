const User = require('../models/User');

//TELA 
const index = async (req, res) => {
    const users = await User.usuariostudo();
    res.render("livros/usuarios.njk", { users });
  };

 //CADASTRO 
const save = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = { name, email, password };

    await User.criar(newUser);

    res.redirect('/');
  } catch (err) {
    console.error(err);
  }
};

module.exports = { index, save };
