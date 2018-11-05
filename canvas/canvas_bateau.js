
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.arc(250, 400, 70, 0, Math.PI, false); 
ctx.stroke();

ctx.moveTo(180,400);
ctx.lineTo(320,400);

ctx.moveTo(250,300);
ctx.lineTo(250,400);

ctx.moveTo(250,300);
ctx.lineTo(300,350);

ctx.moveTo(250,300);
ctx.lineTo(200,350);

ctx.moveTo(200,350);
ctx.lineTo(300,350);
ctx.stroke();

