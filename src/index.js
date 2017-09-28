function removeRests(arr) {
  var arrOfResult = [],
      result,
      rest = 0;
  for (var i = arr.length-1; i >= 0; i--) {
      result = +arr[i]%10+rest;
      rest = 0;
      rest = (+arr[i] - +arr[i]%10) / 10;
      if (result>=10) {
          rest = rest + (result - result%10) / 10;
          result = result%10;
      };
      arrOfResult.unshift(result);
  };
  if (rest != 0) {
      arrOfResult.unshift(rest)
  };
  return arrOfResult.join(',');
};

module.exports = function multiply(first, second) {
  var restForArray,
  counter = 0,
  arrayToPlus = [],
  arrOfResult = [],
  middleValue = [],
  result;
  for (var i = second.length-1; i >= 0; i--) {
    arrayToPlus = [];
    for (var j = first.length-1; j >= 0; j--) {
      arrayToPlus.unshift(first[j]*second[i]);
    };
    for (var k = 0; k < counter; k++) {
      arrayToPlus.push(0);
    };
    arrOfResult = removeRests(arrayToPlus).split(',');
    middleValue = removeRests(middleValue).split(',');
    if (arrOfResult.length > middleValue.length) {
      for (var m = 0; m <= arrOfResult.length - middleValue.length;m++) {
          middleValue.unshift('0');
      };
    };
    if (middleValue.length > arrOfResult.length) {
      for (var m = 0; m < middleValue.length - arrOfResult.length;m++) {
          arrOfResult.push('0');
      };
    };
    for (var l = arrOfResult.length - 1; l >= 0; l--) {
      if (middleValue[l] == undefined) middleValue[l] = 0;
      middleValue[l] = +middleValue[l] + +arrOfResult[l];
    };
    counter++;
  };
  result = removeRests(middleValue).split(',').join(''); 
  return result;
};
