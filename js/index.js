var summedRows = [];
var tab = [];
$(document).ready(function(){
    tab = fillQuadraWithValues(renderBinaryArray(1023));
    summedRows = sumBinaryArrayRows(tab);
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
    emptyArr[i] = Array(5+1).join('0').split('');
  }
  return emptyArr;
}

function fillQuadraWithValues(binnaryArray) {
  var container = [];

  _.each(binnaryArray, function(bin, key) {
    iterator = 0;
    var arr = renderQuadArray();
      for(row in arr){
        for(col in arr){
          if(col > row) {
            arr[row][col] = bin[iterator];
            arr[col][row] = bin[iterator];
            iterator+=1;
          }
        }
      }

        container.push(arr);
  })
  return container;
}

function submitInputs() {
  vals = [];
  for(var i = 0; i < 5; i++) {
    vals.push(parseInt($('#in'+i).val()));
  }
  var amout = _.sortBy(vals);
  compareArrays(summedRows, amout);
}

function compareArrays(arr1, arr2) {
  finalArr = [];
  _.each(arr1, function(val, key) {
    if(_.isEqual(val, arr2) === true) finalArr.push(tab[key]);
  })
  printFinalArr(finalArr);
}

function printFinalArr(finalArr) {
  var text = '';
  var newHTML = [];
  _.each(finalArr, function(row) {
    _.each(row, function(col) {
      _.each(col, function(item){
        newHTML.push('<span>' + item + ' ' + '</span>');
      })
      newHTML.push('<br />');
    })
    newHTML.push('<br />');
  })
  $('#resultArr').empty().append(newHTML);
}

function sumBinaryArrayRows(binnaryArray) {
  rows = [];
  _.each(binnaryArray, function(binArr){
    sumRow = [];
    _.each(binArr, function(bin){
      sum = 0;
      _.each(bin, function(bit){
        sum += parseInt(bit);
      })
      sumRow.push(sum);
    })
    rows.push(_.sortBy(sumRow));
  })
  return rows;
}
