const express = require('express')
const cors = require('cors')
const apiRouter = require('./routers/apiRouter')
const connectToDb = require('./db/dbConnect')
require('dotenv').config()
const PORT = process.env.PORT || 4000
const server = express()

server.use(cors())
server.use(express.json())


server.get('/', (req, res) => {
    res.send("server is running")
})

server.use('/api', apiRouter)


server.listen(PORT, async (err) => {
    let res = await connectToDb()
    if (res.status) {
        console.log("connect to DB");
    } else {
        console.log(res.error);
    }
    if (err) {
        console.log(err.message);
    }

    console.log(`http://localhost:${PORT}`);
})