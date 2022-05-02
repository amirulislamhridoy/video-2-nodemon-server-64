const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0178888888'},
    {id: 2, name: 'Sabnur', email: 'sabnur@gmail.com', phone: '0178888888'},
    {id: 3, name: 'Salma', email: 'salma@gmail.com', phone: '0178888888'},
    {id: 4, name: 'Rojina', email: 'rojina@gmail.com', phone: '0178888888'},
    {id: 5, name: 'Mousumi', email: 'mousumi@gmail.com', phone: '0178888888'},
    {id: 6, name: 'Nusrat', email: 'nusrat@gmail.com', phone: '0178888888'},
    {id: 7, name: 'Kopila', email: 'kopila@gmail.com', phone: '0178888888'},
    {id: 8, name: 'Mahi', email: 'mahi@gmail.com', phone: '0178888888'},
]

app.get('/', (req, res) => {
    res.send('Look mama I can code now sure.')
})
app.get('/users', (req, res) => {
    res.send(users)
})
app.post('/user', (req, res) => {
    const user = req.body
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})
app.get('/user/:id', (req, res) => {
    const userId = req.params.id
    const user = users.find(u => u.id == userId)
    res.send(user)
})

app.listen(port, () => {
    console.log('Listening to port', port)
})