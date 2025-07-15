const rooms = {
  abc123: {
    id: 'abc123',
    players: ['john', 'mary']
  },
  xyz789: {
    id: 'xyz789',
    players: []
  }
}

export function listRooms() {
  return Object.values(rooms)
}

function generateId() {
  return Math.random().toString(36).substring(2, 8)
}

export function createRoom() {
  const id = generateId()
  rooms[id] = { id, players: [] }
  return rooms[id]
}

export function joinRoom(id, nickname) {
  const room = rooms[id]
  if (!room) return null
  room.players.push(nickname)
  return room
}

export function getPlayers(id) {
  const room = rooms[id]
  return room ? room.players : null
}

export function deleteRoom(id) {
  if (!rooms[id]) return false
  delete rooms[id]
  return true
}
