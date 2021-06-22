import express from 'express'
import './database'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

app.listen(process.env.port || 3000, () =>{
    console.log('Server running on port 3000')
})