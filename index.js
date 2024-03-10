import express from "express";
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 3333;

app.use(bodyParser.json())
app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    res.send('Hello From Homepage!')
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))