import ctx from '../Engine/Canvas.js'

class Enemy{
    constructor(){
        this.state = {
            type: 'enemy',
            color: '#51c2d5',
            height: 10,
            width: 10,
            position: {x: this.randomInt(0, 480), y: -16},
            direction: 'y',
            velocity: 2.1
        }


    }

    init = () => {
        const grd = ctx.createLinearGradient(0, 0, 200, 10);
        grd.addColorStop(0.1, "#c21500");
        grd.addColorStop(1, "#ffc500");

        ctx.fillStyle = grd;
        ctx.fillRect(this.state.position.x, this.state.position.y, this.state.width, this.state.height);
        this.state.position[this.state.direction] += this.state.velocity
    }

    randomInt = (min, max) => {
        return min + Math.floor((max - min) * Math.random());
    }


}
export default Enemy