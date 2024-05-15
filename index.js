require('dotenv').config()

require('./DB/connection')

const express=require('express')

const router=require('./Routes/router')

const cors=require('cors')

// create a server using express
const dropCartServer=express()

dropCartServer.use(cors())

dropCartServer.use(express.json())

dropCartServer.use(router)

const PORT=3000||process.env.PORT

dropCartServer.listen(PORT,()=>{
    console.log(`drop cart server running on ${PORT}`);
})