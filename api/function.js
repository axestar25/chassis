const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes or specific routes
app.use(cors());