const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/public', (req, res) => {
    res.sendFile('index.html')
})

app.listen(port, (err, data) => {
    if (err)
        console.log(err);
    else
        console.log(`Example app listening at http://localhost:${port}`)
})