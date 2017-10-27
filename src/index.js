#!/usr/bin/env node

const prompt = require('prompt-promise');
const Promise = require('bluebird');
const uuid = require('uuid');

const jwt = require('jsonwebtoken');
const secretKey = uuid.v4;

const getEmail = require('./getEmail')(prompt, console.log);

const getUserId = require('./getUserId')(prompt);

const getAditionalInputs = require('./getAdditionalInputs')(prompt);
const getRequiredKeys = require('./getRequiredKeys')(prompt);
const copyTextToClipBoard = require('./copyTextToClipboard');

const requiredKeys = {
  user_id: getUserId,
  email: getEmail,
};

const initialState = {
  enteredKeys: 0,
  requiredKeys,
  keys: {},
};

console.log('Starting with JWT token generation');

getRequiredKeys(initialState)
  .then(getAditionalInputs)
  .then(({keys}) => jwt.sign(keys, secretKey()))
  .then(copyTextToClipBoard)
  .then(() => {
    console.log('The JWT has been copied to you clipboard!');
    process.exit();
  });
