const express = require('express')
const app = express()


app.get('/api/user', (req, res) => {
    res.json({
        name: 'ky',
        age: 18,
        role:'admin'
    })
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})