import {
  addCategory,
  updateCategory,
  deleteCategory,
  getCategory,
} from './category/categoryController.js';

// const express = require('express');
import express from 'express';
const app = express();

// respond with "hello world" when a GET request is made to the homepage

//
// route = new router();

app.post('/addCategory', addCategory);
app.get('/getCategory', getCategory);
app.put('/updateCategory', updateCategory);
app.delete('/deleteCategory', deleteCategory);
app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
