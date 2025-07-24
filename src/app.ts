import express, { Request, Response, NextFunction } from 'express';
import roomRoutes from './routes/roomRoutes';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Game Room API is running! ✅')
})

app.use('/rooms', roomRoutes)

export default app
