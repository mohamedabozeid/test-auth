const express = require('express');
const app = express();
const accountController = require('./account/index');
accountController(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'))