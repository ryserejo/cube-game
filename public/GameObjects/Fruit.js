import ctx from '../Engine/Canvas.js'

class Fruit{
    constructor(){
        this.state = {
            type: 'points',
            color: '#fd3a69',
            size: 20,
            operations: [],
            position: {x: this.randomInt(0, 490), y: this.randomInt(0, 490)},
        }

    }

    init = () => {
        this.draw()
        this.state.operations.forEach(operation => operation())
    }

    draw = () => {
        ctx.fillStyle = this.state.color;
        ctx.fillRect(this.state.position.x, this.state.position.y, this.state.size, this.state.size);
    }

    randomInt = (min, max) => {
        return min + Math.floor((max - min) * Math.random());
    }
}


export default Fruit