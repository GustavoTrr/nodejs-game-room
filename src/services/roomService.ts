import { Room } from "src/types/room";

const rooms: Record<string, Room> = {
  abc123: {
    id: 'abc123',
    players: ['john', 'mary'],
  },
  xyz789: {
    id: 'xyz789',
    players: [],
  },
};

function generateId(): string {
  return Math.random().toString(36).substring(2, 8);
}

export function listRooms(): Room[] {
  return Object.values(rooms);
}

export function createRoom(): Room {
  const id = generateId();
  const newRoom: Room = { id, players: [] };
  rooms[id] = newRoom;
  return newRoom;
}

export function joinRoom(id: string, nickname: string): Room | null {
  const room = rooms[id];
  if (!room) return null;
  if (room.players.includes(nickname)) return room;
  room.players.push(nickname);
  return room;
}

export function getPlayers(id: string): string[] | null {
  const room = rooms[id];
  return room ? room.players : null;
}

export function deleteRoom(id: string): boolean {
  if (!rooms[id]) return false;
  delete rooms[id];
  return true;
}
