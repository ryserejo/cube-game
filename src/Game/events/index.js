const { genID } = require("../utils");

const { Player, LifeFruit, Enemy, Fruit } = require("../objects");

const gameRender = {
  add_fruit: (state) => {
    let newFruit = new Fruit();
    newFruit.id = genID(state);
    state.fruits.push(newFruit);
  },
  add_player: ({ state, playerId }) => {
    let newPlayer = Player;
    newPlayer.id = playerId;
    state.players.push(newPlayer);
  },
  add_enemy: (enemy, state) => {
    state.enemies.push((new Enemy().id = genID(state.unavailableIDs)));
  },
  remove_fruit: (id, state) => {
    for (let i = 0; i < state.fruits.length; i++) {
      const fruit = state.fruits[i];

      if (fruit.id === id) {
        state.fruits.splice(i, 1);
      }
    }
  },
  remove_player: (id, state) => {
    for (let i = 0; i < state.players.length; i++) {
      const player = state.players[i];

      if (player.id === id) {
        state.players.splice(i, 1);
      }
    }
  },
  remove_enemy: (id, state) => {
    for (let i = 0; i < state.enemies.length; i++) {
      const enemy = state.enemies[i];

      if (enemy.id === id) {
        state.enemies.splice(i, 1);
      }
    }
  },
};

module.exports = { gameRender };
