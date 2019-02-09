function superReducedString(s) {
  s = s.split('');
  let sLen = s.length;
  for (let i = 0; i < sLen; i++) {
    if (s[i] == s[i+1]) {
      s.splice(i,2);
      sLen = s.length;
    }
    if (s.length == 0) {
      return 'Empty String';
    }
  }
  return  s.join('');
}
