var summedRows = [];
var tab = [];
var finalArrDisply = [];

$(document).ready(function(){
    tab = fillQuadraWithValues(renderBinaryArray(1023));
    summedRows = sumBinaryArrayRows(tab);
})

function renderBinaryArray(value) {
  var binaries = [];
  for (var i = 0; i <= value; i++) {
    if(dec2bin(i).length < 11) {
      binaries.push(addZero(10 - dec2bin(i).length) + ""+ dec2bin(i));
    }
  }
  return binaries;
}

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

function addZero(length) {
    var missing = "";
    for (var i = 0; i<length; i++) {
      missing +="0";
    }
    return missing;
}

function renderQuadArray() {
  var emptyArr = new Array(5);
  for (var i = 0; i < 5; i++) {
    emptyArr[i] = Array(5+1).join("0").split("");
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
    vals.push(parseInt($("#in"+i).val()));
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

  var a = 1;
  var newHTML = [];
  var tempArr = [];
  finalArrDisply.length = 0;
  _.each(finalArr, function(row, key2) {
    _.each(row, function(col, key1) {
      _.each(col, function(item, key){
        if(item == 1){ tempArr.push((key + 1)+""+(key1 + 1)) };
        newHTML.push("<span>" + item + " " + "</span>");
      })
      newHTML.push("<br />");
    })
    finalArrDisply.push(tempArr)
    tempArr = [];
    newHTML.push("<br /><br />");
  })
  $("#resultArr").empty().append(newHTML);
  printPentagon(finalArrDisply);
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

function printPentagon(finalArray){

  $('.pentagon-wrapper').html("");
  var pentagonHtml = '<svg style="margin-bottom: 30px;" height="110px" width="300px"><polyline id="" class="12 21" points="130,10 220,10" style="fill:none;stroke:black;stroke-wclass=th:3"></polyline><polyline class="23 32" class="hello" points="220,10 235,55" style="fill:none;stroke:black;stroke-width:3"></polyline><polyline class="35 53" points="115,55 235,55" style="fill:none;stroke:black;stroke-width:3"></polyline><polyline class="34 43" class="hello" points="235,55 175,90" style="fill:none;stroke:black;stroke-width:3"></polyline><polyline class="45 54" class="hello" points="115,55 175,90" style="fill:none;stroke:black;stroke-width:3"></polyline><polyline class="51 15" class="hello" points="130,10 115,55" style="fill:none;stroke:black;stroke-width:3"></polyline><polyline class="13 31" points="130,10 235,55" style="fill:none;stroke:black;stroke-width:3"></polyline><polyline class="25 52" class="hello" points="220,10 115,55" style="fill:none;stroke:black;stroke-width:3"></polyline><polyline class="14 41" points="130,10 175,90" style="fill:none;stroke:black;stroke-width:3"></polyline><polyline class="24 42" points="220,10 175,90" style="fill:none;stroke:black;stroke-width:3"></polyline><ellipse class="1" cx="130" cy="10" rx="5" ry="5" style="fill:red;"></ellipse><text x="110" y="15" fill="#808080">1</text><ellipse class="2" cx="220" cy="10" rx="5" ry="5" style="fill:red;"></ellipse><text x="235" y="15" fill="#808080">2</text><ellipse class="3" cx="235" cy="55" rx="5" ry="5" style="fill:red;"></ellipse><text x="245" y="55" fill="#808080">3</text><ellipse class="4" cx="175" cy="90" rx="5" ry="5" style="fill:red;"></ellipse><text x="185" y="105" fill="#808080">4</text><ellipse cx="115" cy="55" rx="5" ry="5" style="fill:red;"></ellipse><text x="100" y="55" fill="#808080">5</text></svg>';

  for (var i = 0; i < finalArray.length; i++) {
    $('.pentagon-wrapper').append(pentagonHtml);
  }
  setIds(finalArray)
  hideLines(finalArray)
}

function setIds(finalArray){
  for (var i = 0; i <= finalArray.length; i++) {
    $('svg').each(function(index, el) {
      $(this).attr('id', index);
    });
  }
}

function hideLines(finalArray){
  for (var i = 0; i <= finalArray.length; i++) {
    for (var j = 0; j <= finalArray[i].length; j++) {
      $('#' + i).find('.' + finalArray[i][j]).css('opacity', '1');
    }
  }
}
