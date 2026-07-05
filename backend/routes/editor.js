var express = require('express');
var router = express.Router();
var editorController = require('../controller/code-submission.controller.js')

/* GET users listing. */
router.post('/submitCode', editorController.submitCodeToAI);

module.exports = router;