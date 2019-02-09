function insertionSort2(n, arr) {
  for(let i = 1; i < n; ++i) {
    k = arr[i];
    j = i - 1;
    while(j >= 0 && arr[j] > k) {
      arr[j+1] = arr[j];
      j--;
      console.log(arr.join(' '));
    }
    arr[j+1] = k;
    if (i+1 == n) {
      console.log(arr.join(' '));
    }
  }

}
