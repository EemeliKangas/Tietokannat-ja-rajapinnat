const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('SELECT * FROM arviointi', callback);
  },

  getOne: function(id, callback) {
    return db.query(
      'SELECT * FROM arviointi WHERE idArviointi=?',
      [id],
      callback
    );
  },

  add: function(arviointi, callback) {
    return db.query(
      'INSERT INTO arviointi (Pvm, Arvosana, idOpiskelija, idOpintojakso) VALUES (?, ?, ?, ?)',
      [arviointi.Pvm, arviointi.Arvosana, arviointi.idOpiskelija, arviointi.idOpintojakso],
      callback
    );
  },

  delete: function(id, callback) {
    return db.query(
      'DELETE FROM arviointi WHERE idArviointi=?',
      [id],
      callback
    );
  },

  update: function(id, arviointi, callback) {
    return db.query(
      'UPDATE arviointi SET Pvm=?, Arvosana=?, idOpiskelija=?, idOpintojakso=? WHERE idArviointi=?',
      [arviointi.Pvm, arviointi.Arvosana, arviointi.idOpiskelija, arviointi.idOpintojakso, id],
      callback
    );
  }
};

module.exports = arviointi;