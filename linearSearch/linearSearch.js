// Find whether a value is present in passed in array or not

function linearSearch(arr, val) {

  for (var i = 0; i < arr.length; i += 1) {

    if (arr[i] === val) {
      return val + ' is present at index' + i + ' of [' + arr + ']';
    }

  }

  return val + ' is not present in [' + arr + ']';
}