const functions = {
    getDistance: (object1, object2) => {
        let distance = Math.sqrt(Math.pow(object1.state.position.x - object2.state.position.x, 2) + Math.pow(object1.state.position.y - object2.state.position.y, 2))
        return distance
    },
    randomInt: (min, max) => {
        return min + Math.floor((max - min) * Math.random());
    }

}

export default functions