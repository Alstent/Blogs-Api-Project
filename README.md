# API de Blogs Project

Uma API de um CRUD posts de blog (com o sequelize). Com alguns endpoints (seguindo os princípios do REST) que estão conectados ao banco de dados. Utilizando princípios SOLID.

# Sumário

- [Habilidades](#habilidades)
- [Desenvolvimento](#desenvolvimento)
- [Instruções do projeto](#instruções-do-projeto)
- [Execução de testes unitários](#execução-de-testes-unitários)
- [Linter](#linter)
- [Observações importantes](#-observações-importantes)

# Habilidades 

Back-end usando `ORM` com o pacote `sequelize` do `npm`
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer um `CRUD` com o `ORM`

# Desenvolvimento

Uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

Para fazer um post é necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `post`. Também será necessário a utlização de categorias para seus posts, assim trabalhando a relação de `posts` para `categorias` e de `categorias` para `posts`.

# Instruções do projeto:

1. Clone ou download o repositório

2. Mude para a branch de desenvolvimento
  * Va para a branch `dev`
    * `git checkout dev`
3. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start`
  * Verifique que os testes estão executando:
    * `npm test` 


# Execução de testes unitários

Utilizei Jest para executar os testes.
Use o comando a seguir para executar todos os testes: 

```sh
npm test
```

Caso queria executar só um arquivo de test use o seguinte comando, considerado que quer testar o arquivo `tests/req07-createPost.test.js`:

```sh
npm test tests/req07-createPost.test.js
```
ou
```
npm test req07
```

# Linter

Para garantir a qualidade do código, usaremos o [ESLint](https://eslint.org/).

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json` nos seguintes caminhos:

- `blogs-api/package.json`

Para poder rodar os `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você também pode instalar o plugin do `ESLint` no `VSCode`, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

# 👀 Observações importantes:

**Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

**Faça essas configurações também para as variáveis de ambiente usadas nesses arquivo:**

`blogs-api/config/config.js`

```
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
```

**(Neste arquivo e "obrigatório" deixar o nome do database como `"database": 'blogs_api'`)**

**É essencial usar essas 3 variávies no arquivo acima:**

### Variáveis:

`host: process.env.HOSTNAME`

`user: process.env.MYSQL_USER`

`password: process.env.MYSQL_PASSWORD`

---
**OBS: Os testes irão rodar atráves do migrate usando os seguintes comandos:**

"drop": "npx sequelize-cli db:drop $" -- Dropa o banco

"prestart": "npx sequelize-cli db:create && npx sequelize-cli db:migrate $" -- Cria o banco e gera as tabelas

"seed": "npx sequelize-cli db:seed:all $", -- Insere dados na tabela

**Haverá um arquivo na pasta `/seeders` dentro dela irá conter as querys para inserir no banco `não remova ela os testes irão usar ela`.**


### © Rafael Alstent