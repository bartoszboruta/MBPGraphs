$(document).ready(function(){
  renderBinaryArray(1023);
})

function renderBinaryArray(value) {
  var binaries = [];
  for (var i = 0; i <= value; i++) {
    if(dec2bin(i).length < 11) {
      binaries.push(addZero(10 - dec2bin(i).length) + ''+ dec2bin(i));
    }
  }
  return binaries;
}

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

function addZero(length) {
    var missing = '';
    for (var i = 0; i<length; i++) {
      missing +='0';
    }
    return missing;
}
