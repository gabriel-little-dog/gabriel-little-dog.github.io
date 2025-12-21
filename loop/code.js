let pen = document.getElementById("c").getContext("2d");
let pen2 = document.getElementById("c2").getContext("2d")


drawBackground (pen)
drawBackground (pen2)


// howt to repeat the while-body N times
let N = 13
let i = 0
 
while (i < N) {
    drawSquare (pen,10+i*30, 10+12*30-i*30, "#ff0000")
    ++i; // i = i + 1; 
}

for (i = 0; i < N; ++i) {
    drawSquare(pen2, 10+i*30, 10 + i*30, "#00ff00")

}

function drawBackground (p) {
p.fillStyle = "#aaaaaa"
p.fillRect(0, 0, 400, 400)

}

function drawSquare (p, x, y, c) {
p.fillStyle = c // variable for the colour
p.fillRect(x, y, 20, 20)

}