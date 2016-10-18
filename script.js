// Get the pop-up build
var popUp = document.getElementById('popUpBuild');

// Get the image and insert it inside the pop-up
var popUpImg = document.getElementById("img01");

// Change cursor when hovering over boards on the image map
function mouseOver(x) {
var img = x;

document.body.style.cursor = "pointer";
popUpImg.src="";
popUp.style.display = "hidden";

// Pop-up image of board when it is clicked on the image map
img.onclick = function(){
    popUpImg.src = this.alt;
    popUp.style.display = "block";
}
}

// Default cursor when no longer hovering over boards on image map
function mouseOff() {
document.body.style.cursor = "default";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    popUp.style.display = "none";
}