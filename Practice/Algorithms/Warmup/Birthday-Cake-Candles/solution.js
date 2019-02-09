function birthdayCakeCandles(ar) {
  let obj = {};
  let count = 0;
  for (var i = 0; i < ar.length; i++) {
    if (obj[ar[i]]){
      obj[ar[i]] = obj[ar[i]] + 1;
    } else {
      obj[ar[i]] = 1;
    }
  }
  for ( let i in obj) {
    if (count == 0) {
      count = obj[i];
    } else if (obj[i] > count) {
      count =  obj[i];
    }
  }
  console.log(count);
}
