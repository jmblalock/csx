function map(arr, cb){
  var result = [];

  for (e of arr){
    result.push(cb(e));
  }

  return result;
}

function subtractTwo(n){
  return n - 2;
}

console.log(map([3,4,5], subtractTwo));