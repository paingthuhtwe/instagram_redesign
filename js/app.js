document.querySelector("#iconPrev").onclick = iconPrev;
document.querySelector("#iconNext").onclick = iconNext;

function iconPrev() {
  document.querySelector("#iconTab2").style.display = "none";
  document.querySelector("#iconTab1").style.display = "block";
  document.querySelector("#iconPrev").style.display = "none";
  document.querySelector("#iconNext").style.display = "block";
}
function iconNext() {
  document.querySelector("#iconTab1").style.display = "none";
  document.querySelector("#iconTab2").style.display = "block";
  document.querySelector("#iconNext").style.display = "none";
  document.querySelector("#iconPrev").style.display = "block";
}
