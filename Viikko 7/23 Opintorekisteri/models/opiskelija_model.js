const db = require('../database');

const opiskelija = {

  getAll: function(callback) {
    return db.query('SELECT * FROM opiskelija', callback);
  },

  getOne: function(id, callback) {
    return db.query(
      'SELECT * FROM opiskelija WHERE idOpiskelija = ?',
      [id],
      callback
    );
  },

  add: function(opiskelija, callback) {
    return db.query(
      'INSERT INTO opiskelija (Etunimi, Sukunimi, Osoite, Luokkatunnus) VALUES (?, ?, ?, ?)',
      [
        opiskelija.Etunimi,
        opiskelija.Sukunimi,
        opiskelija.Osoite,
        opiskelija.Luokkatunnus
      ],
      callback
    );
  },

  delete: function(id, callback) {
    return db.query(
      'DELETE FROM opiskelija WHERE idOpiskelija = ?',
      [id],
      callback
    );
  },

  update: function(id, opiskelija, callback) {
    return db.query(
      `UPDATE opiskelija 
       SET Etunimi = ?, Sukunimi = ?, Osoite = ?, Luokkatunnus = ?
       WHERE idOpiskelija = ?`,
      [
        opiskelija.Etunimi,
        opiskelija.Sukunimi,
        opiskelija.Osoite,
        opiskelija.Luokkatunnus,
        id
      ],
      callback
    );
  }

};

module.exports = opiskelija;