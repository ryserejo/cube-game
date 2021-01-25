import ctx from '../Engine/Canvas.js'

class LifeFruit{
    constructor(color){
        this.state = {
            type: 'points',
            color,
            size: 20,
            position: {x: this.randomInt(0, 200), y: this.randomInt(0, 280)},
        }

    }

    init = () => {
        ctx.fillStyle = this.state.color;
        ctx.fillRect(this.state.position.x, this.state.position.y, this.state.size, this.state.size);
    }

    randomInt = (min, max) => {
        return min + Math.floor((max - min) * Math.random());
    }
}

export default LifeFruit