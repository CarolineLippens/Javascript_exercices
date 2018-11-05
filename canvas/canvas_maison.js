
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(200,350);
ctx.lineTo(280,250);
ctx.moveTo(400,350);
ctx.lineTo(280,250);
ctx.stroke();

ctx.beginPath();
ctx.rect(200,350,200,200);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.rect(250,475,50,75);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(285, 510, 5, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();