import ctx from '../Engine/Canvas.js'

const Player = {
    state: {
        life: 100,
        position: {x: 250, y: 250},
        color: 'white',
        height: 20,
        width: 20,
        velocity: 18,
        operations: [],
    },

    init: function(){
        this.draw()
        this.state.operations.forEach(operation => operation())
    },

    draw: function(){
        
        ctx.fillStyle = this.state.color;
        ctx.fillRect(this.state.position.x, this.state.position.y, this.state.width, this.state.height);
    },

    move: function(code){
        if (this.state.position.x >= 500){
            this.state.position.x = 1

        }else if (this.state.position.x <= 0){
            this.state.position.x = 500 - this.state.width
        }else if (this.state.position.y >= 500){
            this.state.position.y = 0
        }else if (this.state.position.y < 0){
            this.state.position.y = 500 - this.state.height
        }

        switch(code){
            case 'up':
                this.state.position.y -= this.state.velocity
                break;
            case 'down':
                this.state.position.y += this.state.velocity
                break;
            case 'left':
                this.state.position.x -= this.state.velocity
                break;
            case 'right':
                this.state.position.x += this.state.velocity
                break;
        }
    }
}

export default Player
