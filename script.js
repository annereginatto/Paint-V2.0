var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");

brush.fillStyle = "white";
brush.fillRect(0, 0, 600, 400);

var draw = false;

var radius = 10;

function drawCircle(evento) {
    if (draw == true) {
        var x = evento.pageX - screen.offsetLeft;
        var y = evento.pageY - screen.offsetTop;
        var shift = evento.shiftKey;
        var alt = evento.altKey;
    

        if (shift == true && radius <= 15) {
            radius += 5;
        }

        if (alt == true && radius >= 10) {
            radius -= 5;
        }

        if (shift == true && alt == true) {
            alert("Você deve pressionar apenas uma tecla por vez!")
        }

        brush.fillStyle = document.querySelector("input").value;
        brush.beginPath();
        brush.arc(x, y, radius, 0, 2 * Math.PI);
        brush.fill();
    }
    console.log(x + ", " + y);
}

function letDraw() {
    draw = true;
}

function stopDraw() {
    draw = false;
}

//Poderia também ser: -- função anônima --
//screen.onmousedown = function() {draw = true};
//screen.onmouseup = function() {draw = false};
//screen.onmousemove = function(evento)...

screen.onmousedown = letDraw;
screen.onmousemove = drawCircle;
screen.onmouseup = stopDraw;