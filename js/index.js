$(document).ready(function(){
  fillQuadraWithValues(renderBinaryArray(1023));
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

function renderQuadArray() {
  var emptyArr = new Array(5);
  for (var i = 0; i < 5; i++) {
    emptyArr[i] = new Array(5);
  }
  return emptyArr;
}

function fillQuadraWithValues(binnaryArray) {
  var container = [];
  _.each(binnaryArray, function(bin, key) {
    var arr = renderQuadArray();
      for (var i = 0; i < 5; i++) {
        arr[i][i] = '0';
      }
        arr[0][1] = arr[1][0] = bin[0];
        arr[0][2] = arr[2][0] = bin[1];
        arr[0][3] = arr[3][0] = bin[2];
        arr[0][4] = arr[4][0] = bin[3];
        arr[1][2] = arr[2][1] = bin[4];
        arr[1][3] = arr[3][1] = bin[5];
        arr[1][4] = arr[4][1] = bin[6];
        arr[2][3] = arr[3][2] = bin[7];
        arr[2][4] = arr[4][2] = bin[8];
        arr[3][4] = arr[4][3] = bin[9];
        container.push(arr);
  })
  return container;
}
