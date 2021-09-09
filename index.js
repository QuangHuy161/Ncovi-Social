const express = require('express')
const app = express()
const port = 3000

app.use(express.static('/src/public'));

app.get('/src/public', (req, res) => {
    res.sendFile('index.html')
})

app.listen(port, (err, data) => {
    if (err)
        console.log(err);
    else
        console.log(`Example app listening at http://localhost:${port}`)
})
