var itemList = document.querySelector("#items");
var button = document.getElementById("button");
var box = document.getElementById("box");
box.addEventListener("mousemove", runEvent);
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector("form");
var select = document.querySelector("select");
form.addEventListener("submit", runEvent);
function runEvent(e) {
  e.preventDefault();
  console.log("EVENT TYPE: " + e.type);
}
