const userModel = require('../models/userModel');

const getUsers = (req, res) => {
  const users = userModel.findAll();
  return res.status(200).json({
    sucesso: true,
    dados: users
  });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const user = userModel.findById(id);

  if (!user) {
    return res.status(404).json({
      sucesso: false,
      erro: `Usuário com o ID ${id} não foi encontrado.`
    });
  }

  return res.status(200).json({
    sucesso: true,
    dados: user
  });
};

const createUser = (req, res) => {
  const { nome, email, cargo } = req.body;

  if (!nome || !email) {
    return res.status(400).json({
      sucesso: false,
      erro: 'Os campos "nome" e "email" são obrigatórios.'
    });
  }

  const newUser = userModel.create({ nome, email, cargo });

  return res.status(201).json({
    sucesso: true,
    mensagem: 'Usuário cadastrado com sucesso!',
    dados: newUser
  });
};

module.exports = { getUsers, getUserById, createUser };