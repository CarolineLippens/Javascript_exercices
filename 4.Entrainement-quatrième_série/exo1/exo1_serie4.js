let img = document.getElementById("image1")
img.onmouseover = function() {mouseOver()};
img.onmouseout = function() {mouseOut()};
function mouseOver() {
    img.style.border = "thick solid #C60800";
}

function mouseOut() {
    img.style.border = "none";
}