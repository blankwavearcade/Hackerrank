function climbingLeaderboard(scores, alice) {
  scores = scores.filter(uniques);
  console.log('Scores: ', scores);
  console.log('alices: ', alice);
  var aLen = alice.length,
   sLen = scores.length,
   j = sLen,
   rank = 0,
   arr = [];
  for(var i = 0; i < aLen; i++) {
    if (alice[i] < scores[j-1]) {
      rank = j + 1;
    } else {
      rank = j;
    }
    j--;
    arr.push(rank);
  }
  return arr;
}

function uniques(value, index, self) {
  return self.indexOf(value) === index;
}
