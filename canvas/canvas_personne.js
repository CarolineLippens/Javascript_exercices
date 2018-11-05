
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


ctx.beginPath();
ctx.rect(239,75,20,20);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.rect(212,95,75,100);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.rect(285,95,25,120);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.rect(195,95,25,120);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.rect(220,195,32,150);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.rect(255,195,32,150);
ctx.fillStyle = "red";
ctx.fill();


ctx.beginPath();
ctx.arc(250, 60, 30, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.arc(240, 55, 5, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.arc(260, 55, 5, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();