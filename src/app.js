import express from 'express'
import roomRoutes from './routes/roomRoutes.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Game Room API is running! ✅')
})

app.use('/rooms', roomRoutes)

export default app
