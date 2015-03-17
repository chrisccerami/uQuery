function uQuery(id){
  var target = document.getElementById(id);

  target.makeBold = function(target) {
    this.style.fontWeight = "bold";
    return this;
  }

  target.makeRed = function(target) {
    this.style.color = "red";
    return this;
  }

  target.getValue = function(target) {
    return this.value;
  }

  return target;
}

function $(id) {
  return uQuery(id);
}
