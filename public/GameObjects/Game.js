import Player from './Player.js'
import Fruit from './Fruit.js'
import Enemy from './Enemy.js'
import LifeFruit from './LifeFruit.js'
import LeftEnemy from './LeftEnemy.js'
import Functions from './Functions.js'

export default class Game {
    constructor() {
        console.log("Game has been initialized")

        this.state = {
            points: 0,
            life: 100,
            enemiesLimit: 20,
            fruitsLimit: 8,
            lifeFruitLimit: 1,
            players: [Player],
            fruits: [],
            enemies: [],
            lifeFruit: [],
            colors: ["#f37121", "#120078", "#ff577f"]
        }

        this.funcs = []
    }

    init(){
        this.gameRules()
        this.state.players[0].init()
        this.genFruit()
        this.genEnemies()
        this.genLeftEnemy()

        if(Functions.randomInt(0, 100) == 2){
        this.genLifeFruit()
        }
    }

    gameRules(){
        if (this.state.life <= 0){
            document.location.reload()
        }
    }

    genLifeFruit(){
        if (Functions.randomInt(0, 490) === 73){

            if(this.state.lifeFruit.length <= this.state.lifeFruitLimit){
                this.state.lifeFruit.push(new LifeFruit(this.state.colors[Functions.randomInt(0, 3)]))
            }

        }


        for (let i = 0; i < this.state.lifeFruit.length; i++) {
            this.state.lifeFruit[i].init()
        }

        for (let i = 0; i < this.state.lifeFruit.length; i++) {
            if (Functions.getDistance(Player, this.state.lifeFruit[i]) <= 19){
                this.state.lifeFruit.splice(i, 1);
                this.state.life += 15
            }
           
        }
    }

    genFruit(){
        if (Functions.randomInt(1, 100) === 3){

            if(this.state.fruits.length <= this.state.fruitsLimit){
                this.state.fruits.push(new Fruit())
            }

        }


        for (let i = 0; i < this.state.fruits.length; i++) {
            this.state.fruits[i].init()
        }

        for (let i = 0; i < this.state.fruits.length; i++) {
            if (Functions.getDistance(Player, this.state.fruits[i]) <= 19){
                this.state.fruits.splice(i, 1);
                this.state.points += 10
            }
           
        }
        
    }
    genLeftEnemy() {
        if (Functions.randomInt(1, 50) === 13){
            
            if(this.state.enemies.length <= this.state.enemiesLimit){
                this.state.enemies.push(new LeftEnemy())
            }

        }


        for (let i = 0; i < this.state.enemies.length; i++) {
            this.state.enemies[i].init()  
        }

        for (let i = 0; i < this.state.enemies.length; i++) {
            if (Functions.getDistance(Player, this.state.enemies[i]) <= 21){
                this.state.enemies.splice(i, 1);
                this.state.life -= 10
            }  
        }

        for (let i = 0; i < this.state.enemies.length; i++) {
            if (this.state.enemies[i].state.position.x > 495){
                this.state.enemies.splice(i, 1);
            }  
        }

    }

    genEnemies() {
        if (Functions.randomInt(1, 50) === 5){
            
            if(this.state.enemies.length <= this.state.enemiesLimit){
                this.state.enemies.push(new Enemy())
            }

        }


        for (let i = 0; i < this.state.enemies.length; i++) {
            this.state.enemies[i].init()  
        }

        for (let i = 0; i < this.state.enemies.length; i++) {
            if (Functions.getDistance(Player, this.state.enemies[i]) <= 21){
                this.state.enemies.splice(i, 1);
                this.state.life -= 10
            }  
        }

        for (let i = 0; i < this.state.enemies.length; i++) {
            if (this.state.enemies[i].state.position.y > 495){
                this.state.enemies.splice(i, 1);
            }  
        }

    }
}