const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getStoreInfo = function(callback, id) {
  connection.query('SELECT * FROM stores WHERE id=' + id, (err, info) => {
    if (err) {
      callback(err);
    }
    callback(null, info);
  });
};

const getItemInfo = function(callback, id) {
  connection.query('SELECT * FROM items WHERE id=' + id, (err, info) => {
    if (err) {
      callback(err);
    }
    callback(null, info);
  });
};

const getStockInfo = function(callback, storeID, itemID) {
  connection.query(`SELECT * FROM inventory WHERE store=${storeID} AND item=${itemID}`, (err, info) => {
    if (err) {
      callback(err);
    }
    callback(null, info);
  });
};

const getRelatedItems = function (callback, from, to) {
  connection.query(`SELECT * FROM items WHERE id BETWEEN ${from} AND ${to}`, (err, items) => {
    if (err) {
      callback(err);
    }
    callback(null, items)
  });
};

const getAllStores = function(callback) {
  connection.query('SELECT * FROM stores', (err, info) => {
    if (err) {
      callback(err);
    }
    callback(null, info);
  });
}

module.exports = {
  getStoreInfo,
  getItemInfo,
  getStockInfo,
  getRelatedItems,
  getAllStores
};