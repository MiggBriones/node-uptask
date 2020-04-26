const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const db = new Sequelize('uptasknode', 'root', 'passw0rd', {
  host: '192.168.56.101',
  dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  port: '3307',
  define: {
      timestamps: false
  }
});

module.exports = db;