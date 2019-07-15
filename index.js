var anote = document.getElementById("a");
// var bnote = document.getElementById("b");
// var cnote = document.getElementById("c");
// var dnote = document.getElementById("d");
// var enote = document.getElementById("e");
// var fnote = document.getElementById("f");
// var gnote = document.getElementById("g");

document.onmouseover = hoverA();
document.getElementById("abutton").onMouseOver();

function hoverA() {
  document.getElementById("a").style.color = "red";
}
