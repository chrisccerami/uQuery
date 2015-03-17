function makeBold(id) {
  var target = document.getElementById(id);
  target.style.fontWeight = "bold";
  return target;
}

function makeRed(id) {
  var target = document.getElementById(id);
  target.style.color = "red";
  return target;
}

function getValue(id) {
  var target = document.getElementById(id);
  return target.value;
}
