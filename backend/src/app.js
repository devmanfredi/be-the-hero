const express = require('express')
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Rota / recursos
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação
 * POST: Criar uma informação no back
 * PUT: Aletrar uma informação no back
 * DELETE: Deletar uma informação no back
 */

 /**
  * Tipos de parâmetros
  * 
  * Query: parametros nomeados enviados nas rotas após "?" (filtros, paginação)
  * Route Params: Parametros ultilizados para indentificar recursos
  * Request Body: Corpo da requisicao ultizado para criar ou alterar
  */
/**
 * SQL : MySQL, SQLite, Postgres, Oracle, SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 */

/**
 * Driver: SELECT * FROM USERS
 * Queryes Builders(KNEX.js): table('users').select('*').where()
 */
module.exports = app;