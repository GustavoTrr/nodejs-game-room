import * as roomService from '../services/roomService.js'

export function listRooms(req, res) {
    const rooms = roomService.listRooms()
    res.json(rooms)
}

export function createRoom(req, res) {
    const room = roomService.createRoom()
    res.status(201).json(room)
}

export function joinRoom(req, res) {
    const { id } = req.params
    const { nickname } = req.body
    const result = roomService.joinRoom(id, nickname)
    if (!result) {
        return res.status(404).json({ error: 'Room not found' })
    }
    res.status(200).json(result)
}

export function listPlayers(req, res) {
    const { id } = req.params
    const players = roomService.getPlayers(id)
    if (!players) {
        return res.status(404).json({ error: 'Room not found' })
    }
    res.json(players)
}

export function deleteRoom(req, res) {
    const { id } = req.params
    const deleted = roomService.deleteRoom(id)
    if (!deleted) {
        return res.status(404).json({ error: 'Room not found' })
    }
    res.sendStatus(204)
}
