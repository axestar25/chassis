// // api/getData.js

// const databaseUrl = process.env.POSTGRES_URL;

// module.exports = (req, res) => {
//     const data = [
//       { id: 1, name: 'Item 1' },
//       { id: 2, name: 'Item 2' },
//       { id: 3, name: 'Item 3' },
//     ];
  
//     res.status(200).json(data);
//   };

const cors = require('cors')

import axios from 'axios';
import jQuery from 'jquery';

export const apiUsers = 'http://localhost:8080/chassis-api/getUsers.php';
export const apiArticles = 'http://localhost:8080/chassis-api/getArticles.php';
export const apiSaveArticles = 'http://localhost:8080/chassis-api/saveArticles.php';
export const apiDeleteArticle = 'http://localhost:8080/chassis-api/deleteArticle.php';
export const apiUpdateArticle = 'http://localhost:8080/chassis-api/updateArticle.php';

// axios.get(apiUrl)
//   .then(response => {
//     // Handle the data received from the PHP script
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
