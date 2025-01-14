const express = require("express");
const router = express.Router();
const cors = require("cors");

const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true,
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
  };
  
  router.use(cors(corsOptions));
  router.options('*', cors(corsOptions)); 

const { test, loginUser, createUser } = require("../controllers/authController");

router.get('/test', test);
router.post('/login', loginUser);
router.post('/register', createUser);

module.exports = router;