const bcrypt = require('bcrypt');
const { conn } = require('../db');
const saltRounds = 10;



///CRIAR CONTA
async function criar(data) {
  const sql = `
  INSERT INTO
    users ( name, email, password)
  VALUES
    ( ?, ?, ?)
  `;
  const db = await conn();

  const {  name, email, password } = data;

  const hash = await bcrypt.hash(password, saltRounds);

  const { lastID } = await db.run(sql, [ name, email, hash]);

  return lastID;
}

//todos buscar
async function usuariostudo() {
    const sql = `
    SELECT
      *
    FROM
    users
  `;
    const db = await conn();
    const user = await db.all(sql);
    return user;
  }

module.exports = { criar, usuariostudo };
