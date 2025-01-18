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

const { test, loginUser, createUser, loginAdmin, getUser, getUsers, addBalance , withdrawBank, withdrawCrypto, getBankRecords, getCryptoRecords} = require("../controllers/authController");

router.get('/test', test);
router.post("/getUser", getUser);
router.get("/getUsers", getUsers);
router.post('/login', loginUser);
router.post('/register', createUser);
router.post('/adminAuth', loginAdmin);
router.post('/addBalance', addBalance);
router.post("/withdrawBank", withdrawBank);
router.post("/withdrawCrypto", withdrawCrypto);
router.post("/getBankRecords", getBankRecords);
router.post("/getCryptoRecords", getCryptoRecords);


module.exports = router;