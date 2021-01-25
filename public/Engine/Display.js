const score = document.getElementById("points")
const life = document.getElementById("life")
const time = document.getElementById("time")

export const displayState = {
    setScore: function(x){
        score.innerText = x
    },
    setLife: function(x){
        life.innerText = x
    },
    setTime: function(x){
        time.innerText = x
    }
}