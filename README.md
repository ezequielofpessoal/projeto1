# API Connect Users - Módulo de Gerenciamento de Usuários

API RESTful para cadastro, leitura, atualização e remoção (CRUD) de usuários, desenvolvida como Produto Mínimo Viável (MVP) para o ecossistema da startup. O projeto conta com validações de entrada, respostas JSON padronizadas e tratamento determinístico de erros.

---

## Objetivo do Projeto

Esta API foi projetada para servir como camada de backend resiliente e escalável, garantindo a integridade dos dados trafegados entre a interface (front-end) e a base de dados. O sistema previne a corrupção de registros aplicando regras rígidas de validação de payload no cadastro e padroniza os envelopes de resposta em todos os endpoints.

---

## Tecnologias Utilizadas

- **Node.js** (v20+) - Ambiente de execução JavaScript no servidor
- **Express.js** (v4.19+) - Framework web para construção das rotas e controladores HTTP
- **Nodemon** (v3.1+) - Ferramenta de desenvolvimento para recarregamento automático do servidor
- **Git & GitHub** - Controle de versionamento de código
- **Thunder Client / Postman** - Testes manuais das rotas HTTP

---

## Instruções para Execução Local

### Pré-requisitos
- **Node.js** e **npm** instalados na sua máquina.

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/ezequielofpessoal/projeto1/tree/main)

2. Navegar até a pasta do projeto
3. Instalar as dependências: npm install
4. Iniciar o servidor em modo de desenvolvimento: npm run dev
5. Acessar a API:
A API estará rodando no endereço: http://localhost:3000

Documentação dos Endpoints
Resumo dos Recursos
Método:    GET,       GET,          POST
Endpoint:  /users,    /users/:id    /users
Descrição: Retorna    Busca um      Cadastra
           a lista    usuário es-   um novo
           completa   pecífico      usuário
           de usu-    pelo ID.      com vali-
           ários.                   dação.
Status 
Esperado: 200 OK      200 OK /      201 Created /
                      404 Not       400 Bad Request
                      Found

1. Listar todos os usuários (GET /users)
Requisição: GET http://localhost:3000/users

Corpo (Body): Vazio

Resposta de Sucesso (200 OK):

JSON

{
  "sucesso": true,
  "dados": [
    {
      "id": 1,
      "nome": "Ana Silva",
      "email": "ana.silva@startup.com",
      "cargo": "Desenvolvedora Front-end"
    },
    {
      "id": 2,
      "nome": "Carlos Eduardo",
      "email": "carlos.eduardo@startup.com",
      "cargo": "UX/UI Designer"
    }
  ]
}
2. Buscar usuário por ID (GET /users/:id)
Requisição: GET http://localhost:3000/users/1

Resposta de Sucesso (200 OK):

JSON

{
  "sucesso": true,
  "dados": {
    "id": 1,
    "nome": "Ana Silva",
    "email": "ana.silva@startup.com",
    "cargo": "Desenvolvedora Front-end"
  }
}
Resposta de Erro (404 Not Found):

JSON

{
  "sucesso": false,
  "erro": "Usuário com o ID 999 não foi encontrado."
}

3. Cadastrar novo usuário (POST /users)
Requisição: POST http://localhost:3000/users

Headers: Content-Type: application/json

Corpo Válido (Body):

JSON

{
  "nome": "Mariana Costa",
  "email": "mariana@startup.com",
  "cargo": "Desenvolvedora Backend"
}
Resposta de Sucesso (201 Created):

JSON

{
  "sucesso": true,
  "mensagem": "Usuário cadastrado com sucesso!",
  "dados": {
    "id": 3,
    "nome": "Mariana Costa",
    "email": "mariana@startup.com",
    "cargo": "Desenvolvedora Backend"
  }
}
Corpo Inválido (Exemplo sem o e-mail):

JSON

{
  "nome": "Mariana Costa"
}
Resposta de Erro de Validação (400 Bad Request):

JSON
{
  "sucesso": false,
  "erro": "Os campos \"nome\" e \"email\" são obrigatórios."
}

 Regras de Validação Implementadas:
Obrigatoriedade de Campos: As requisições de criação (POST) exigem obrigatoriamente a presença dos atributos nome e email.

Tratamento de Inexistência: Buscas por ID que não constem na memória do servidor respondem com o status 404 Not Found e uma mensagem explicativa.

Padronização de Respostas: Todas as respostas utilizam um envelope JSON previsível contendo a chave booleana sucesso, juntamente com dados em caso de êxito ou erro em caso de falha.
