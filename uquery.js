function makeBold(selector) {
  var target = document.getElementsByClassName(selector);
  for (var i = 0, ii = target.length; i < ii; i++) {
    target[i].style.fontWeight = "bold";
  };
}
