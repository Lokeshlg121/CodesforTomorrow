import { categorySchema } from './categorySchema.js';
import mysql from 'mysql';
var con = mysql.createConnection({
  database: 'lokeshSchema',
  host: 'localhost',
  user: 'root',
  password: 'mongoose',
  port: 3000,
});

//
export const addCategory = (req, res) => {
  con.connect(function(err) {
    if (err) {
      console.log(`connectionrequest failed`);
    } else {
      console.log(`db connectionrequest successful`);
    }
  });

  var sql = `INSERT INTO category name VALUES 'lokesh' `;
  con.query(sql, function(err, result) {
    if (err) console.log('err', err);
    res.send('data inserted');
  });
};

export const updateCategory = (req, res) => {
  res.send(req.query);
  console.log('inside fun');
};

export const deleteCategory = (req, res) => {
  res.send(req.query);
  console.log('inside fun');
};

export const getCategory = (req, res) => {
  res.send(req.query);
  console.log('inside fun');
};
