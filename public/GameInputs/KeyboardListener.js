import Player from '../GameObjects/Player.js'

const up = document.getElementById("up").addEventListener("pointerdown", e =>{ e.preventDefault(); Player.move('up')});
const down = document.getElementById("down").addEventListener("pointerdown", e =>{ e.preventDefault(); Player.move('down')});
const left = document.getElementById("left").addEventListener("pointerdown", e =>{ e.preventDefault(); Player.move('left')});
const right = document.getElementById("right").addEventListener("pointerdown", e =>{ e.preventDefault(); Player.move('right')});

document.addEventListener('keydown', e => {
    switch (e.key) {
        case "ArrowUp":
            Player.move('up')
            break;

        case "ArrowDown":
            Player.move('down')
            break;

        case "ArrowLeft":
            Player.move('left')
            break;

        case "ArrowRight":
            Player.move('right')
            break;

        default:
            break;
    }
})