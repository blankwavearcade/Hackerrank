function miniMaxSum(arr) {
  let min = 0;
  let max = 0;
  var temp = 0;
  for(var i = 0; i < arr.length; i++) {
    for (var j = 0; j < 5; j++) {
      if(i != j) {
        temp += arr[j];
      }
    }
    if (min == 0 || temp < min) {
      min = temp;
    }
    if (temp > max) {
      max = temp;
    }
    temp = 0;
  }
  console.log(`${min} ${max}`);
}
