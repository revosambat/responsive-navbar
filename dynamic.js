function dropdown() {
  document.querySelector(".dropdown").style.visibility = "visible";
  document.querySelector(".dropdown").style.height = "50%";
  document.querySelector(".dropdown").style.transition =
    "height 0.5s ease-in-out";
}

window.onclick = function(event) {
  if (!event.target.matches("#icon")) {
    this.dropup();
  }
};

function dropup() {
  document.querySelector(".dropdown").style.height = "0px";
  document.querySelector(".dropdown").style.transition =
    "height 0.5s ease-in-out";
}

function myabout() {
  document.querySelector(".about").style.visibility = "visible";
}
