function hurdleRace(k, height) {
  height = height.sort(function(a, b) {
    return a > b;
  })[height.length - 1];
  return k >= height ? 0 : height - k;
}

