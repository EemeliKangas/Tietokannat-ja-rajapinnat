const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.query('SELECT * FROM opintojakso', callback);
  },

  getOne: function(id, callback) {
    return db.query(
      'SELECT * FROM opintojakso WHERE idOpintojakso=?',
      [id],
      callback
    );
  },

  add: function(opintojakso, callback) {
    return db.query(
      'INSERT INTO opintojakso (Koodi, Laajuus, Nimi) VALUES (?, ?, ?)',
      [opintojakso.Koodi, opintojakso.Laajuus, opintojakso.Nimi],
      callback
    );
  },

  delete: function(id, callback) {
    return db.query(
      'DELETE FROM opintojakso WHERE idOpintojakso=?',
      [id],
      callback
    );
  },

  update: function(id, opintojakso, callback) {
    return db.query(
      'UPDATE opintojakso SET Koodi=?, Laajuus=?, Nimi=? WHERE idOpintojakso=?',
      [opintojakso.Koodi, opintojakso.Laajuus, opintojakso.Nimi, id],
      callback
    );
  }
};

module.exports = opintojakso;