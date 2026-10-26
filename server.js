const express = require('express')

const app = express()

app.use(express.static('public'))

app.get("/", function (req, res) {
    res.sendFile(__dirneme + '/public/index.html')
});

app.listen(process.eventNames.PORT || 3000)

console.log(`Servidor rodando - http://localhost:3000`)