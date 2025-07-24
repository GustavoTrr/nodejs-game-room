import { Request, Response } from 'express';
import * as roomService from '../services/roomService';
import { Room } from 'src/types/room';

export function listRooms(_req: Request, res: Response): Response<Room[]> {
  const rooms = roomService.listRooms();
  return res.json(rooms);
}

export function createRoom(_req: Request, res: Response): Response<Room> {
  const room = roomService.createRoom();
  return res.status(201).json(room);
}

export function joinRoom(req: Request, res: Response): Response<Room> {
  const { id } = req.params;
  const { nickname } = req.body;

  if (!nickname) {
    return res.status(400).json({ error: 'Nickname is required' });
  }

  const result = roomService.joinRoom(id, nickname);
  if (!result) {
    return res.status(404).json({ error: 'Room not found' });
  }

  return res.status(200).json(result);
}

export function listPlayers(req: Request, res: Response): Response<String[]> {
  const { id } = req.params;
  const players = roomService.getPlayers(id);

  if (!players) {
    return res.status(404).json({ error: 'Room not found' });
  }

  return res.json(players);
}

export function deleteRoom(req: Request, res: Response): Response<void> {
  
  const { id } = req.params;
  const deleted = roomService.deleteRoom(id);

  if (!deleted) {
    return res.status(404).json({ error: 'Room not found' });
  }

  return res.sendStatus(204);
}
