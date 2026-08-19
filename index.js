const express = require('express');
const port = 8000;
const router = express.Router();
router.get('/', (request, response)=> response.send('hello from skillsoft1'));
app.use('/', router);
app.listen(port, function(){
console.log("Listening " + port);
});