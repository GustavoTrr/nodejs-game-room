import { Router } from 'express'
import {
    listRooms,
    createRoom,
    joinRoom,
    listPlayers,
    deleteRoom
} from '../controllers/roomController'

const router = Router()
router.get('/', listRooms)
router.post('/', createRoom)
router.post('/:id/join', joinRoom)
router.get('/:id/players', listPlayers)
router.delete('/:id', deleteRoom)

export default router
