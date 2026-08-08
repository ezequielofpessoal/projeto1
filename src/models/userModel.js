const users = [
  {
    id: 1,
    nome: "Ana Silva",
    email: "ana.silva@startup.com",
    cargo: "Desenvolvedora Front-end"
  },
  {
    id: 2,
    nome: "Carlos Eduardo",
    email: "carlos.eduardo@startup.com",
    cargo: "UX/UI Designer"
  }
];

let currentId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;

const findAll = () => users;

const findById = (id) => users.find(u => u.id === Number(id));

const create = ({ nome, email, cargo }) => {
  currentId += 1;
  const newUser = { id: currentId, nome, email, cargo: cargo || "Não informado" };
  users.push(newUser);
  return newUser;
};

module.exports = { findAll, findById, create };