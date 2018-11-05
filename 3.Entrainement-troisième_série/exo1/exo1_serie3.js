let img = document.getElementById("image1")
img.onmouseover = function() {mouseOver()};
img.onmouseout = function() {mouseOut()};

function mouseOver() {
   img.src= "image1_2.jpg";
}

function mouseOut() {
    img.src="image1.jpg";
}