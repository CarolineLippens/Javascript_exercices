
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(50,50);
ctx.lineTo(50,600);
ctx.moveTo(50,50);
ctx.lineTo(350,50);
ctx.moveTo(50,250);
ctx.lineTo(350,250);
ctx.moveTo(350,250);
ctx.lineTo(350,50);
ctx.strokeStyle="red"

//ctx.moveTo(150,50);
//ctx.lineTo(150,250);
//ctx.moveTo(250,50);
//ctx.lineTo(250,250);

ctx.stroke();

ctx.beginPath();
ctx.rect(150,50,100,200);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.rect(50,50,100,200);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.rect(250,50,100,200);
ctx.fillStyle = "red";
ctx.fill();