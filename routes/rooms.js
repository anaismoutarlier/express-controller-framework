var express = require("express");
var router = express.Router();
const roomsController = require("../controllers/rooms");

/* GET home page. */
router.get("/", roomsController.getAll);

router.get("/:roomId", roomsController.getOne);

router.post("/", roomsController.newRoom);

module.exports = router;
