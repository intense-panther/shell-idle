'use strict';

const fs = require('fs');
const process = require('process');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const shell = require('shelljs');

// Request logger
app.use(morgan('combined'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.all('/', function (req, res) {
  res.status(200).send("Hello!\n");
});

app.all('/env', function (req, res) {
  res.status(200).send(shell.exec("env").stdout);
});

app.all('/idle', function (req, res) {
  var output = shell.exec("oc idle ocapp").stdout;
  res.status(200).send(output);
});

app.listen(8888);
