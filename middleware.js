const express = require("express");
const cors = require("cors");
const middleware = [express.json(), cors()];

module.exports = middleware;
