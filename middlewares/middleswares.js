const express = require("express");
const app = express();

const middllewares = ()=>  express.urlencoded({ extended: false })

module.exports = {middllewares}