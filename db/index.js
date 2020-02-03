const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getStoreInfo = function(callback, id) {
  // TODO - your code here!
  console.log('Getting store info!');
  connection.query('SELECT * FROM stores WHERE id=' + id, (err, info) => {
    if (err) {
      callback(err);
    }
    callback(null, info);
  });
};

const getItemInfo = function(callback, id) {
  // TODO - your code here!
  console.log('Getting item info!');
  connection.query('SELECT * FROM items WHERE id=' + id, (err, info) => {
    if (err) {
      callback(err);
    }
    callback(null, info);
  });
};

const getStockInfo = function(callback, storeID, itemID) {
  // TODO - your code here!
  console.log('Getting stock info!');
  connection.query(`SELECT * FROM inventory WHERE store=${storeID} AND item=${itemID}`, (err, info) => {
    if (err) {
      callback(err);
    }
    callback(null, info);
  });
};

module.exports = {
  getStoreInfo,
  getItemInfo,
  getStockInfo
};