const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const sockets = socketio(server);
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));

const state = require("./Game/state");
const events = require("./Game/events");

const fruitadd = (socket) => {
  setInterval(() => {
    events.gameRender.add_fruit(state);
    socket.emit("init", state);
  }, 3000);
};

const addNewPlayer = (socket) => {
  const playerId = socket.id;
  events.gameRender.add_player({ state, playerId });
  console.log(`🆕 novo jogador conectado | 🟢 id: ${playerId}`);
};

sockets.on("connection", (socket) => {
  fruitadd(socket)
  const playerId = socket.id;

  addNewPlayer(socket);
  socket.emit("init", state);

  socket.on("disconnect", () => {
    events.gameRender.remove_player(playerId, state);
    console.log(`🏃 um jogador saiu | 🔴 id: ${playerId}`);
  });

  socket.on("move-player", (command) => {});
});

server.listen(3000, () => {
  console.log(`> Server listening on port: 3000`);
});
