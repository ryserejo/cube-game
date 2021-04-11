const Player = {
  type: "player",
  id: '',
  state: {
    color: "white",
    height: 20,
    width: 20,
    position: { x: 250, y: 250 },
    velocity: 18,
    life: 100,
  },
};

const LifeFruit = {
  type: "life-fruit",
  id: "",
  state: {
    color: "red",
    height: 20,
    width: 20,
    position: { x: 0, y: 0 },
  },
};

const Enemy = {
  type: "enemy",
  id: "",
  state: {
    type: "enemy",
    color: "#51c2d5",
    height: 10,
    width: 10,
    position: { x: 0, y: 0 },
    direction: "y",
    velocity: 2.1,
  },
};

class Fruit {
  constructor(){
  this.type = "fruit"
  this.id = ""
  this.state = {
    color: "#fd3a69",
    height: 20,
    width: 20,
    position: { x: 0, y: 0 },
  
  }}
};

module.exports = { Player, LifeFruit, Enemy, Fruit };
