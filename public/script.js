import Render from "../public/rynder/render"
console.log(Render)
const socket = io();

socket.on("connect", () => {
  const playerId = socket.id;
});

socket.on("disconnect", () => {
  console.log("Unsubscribing All");
});

socket.on("init", (state) => {
  const playerId = socket.id;
  console.log(state)
});

socket.on("add-player", (command) => {
  // console.log(`Receiving ${command.type} -> ${command.playerId}`)
});

socket.on("remove-player", (command) => {
  // console.log(`Receiving ${command.type} -> ${command.playerId}`)
});

socket.on("move-player", (command) => {
  // console.log(`Receiving ${command.type} -> ${command.playerId}`)

  const playerId = socket.id;

  if (playerId !== command.playerId) {
    //game.movePlayer(command)
  }
});
