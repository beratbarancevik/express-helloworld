/*jslint node: true */
'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Server listening on port: ${port}`));