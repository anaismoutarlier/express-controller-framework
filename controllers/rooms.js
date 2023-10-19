const rooms = require("../rooms.mock");
// class RoomsController {
//   getAll(_, res) {
//     res.json({ rooms });
//   }

//   getOne(req, res) {
//     const { roomId } = req.params;
//     const room = rooms.find(room => room.id === Number(roomId));
//     res.json({ room });
//   }

//   newRoom(req, res) {
//     rooms.push({ id: rooms.at(-1).id + 1, ...req.body });
//     res.json({ room: rooms.at(-1) });
//   }
// }

function getAll(_, res) {
  res.json({ rooms });
}

function getOne(req, res) {
  const { roomId } = req.params;
  const room = rooms.find(room => room.id === Number(roomId));
  res.json({ room });
}

function newRoom(req, res) {
  rooms.push({ id: rooms.at(-1).id + 1, ...req.body });
  res.json({ room: rooms.at(-1) });
}

// module.exports = new RoomsController();
module.exports = {
  getAll,
  getOne,
  newRoom,
};
