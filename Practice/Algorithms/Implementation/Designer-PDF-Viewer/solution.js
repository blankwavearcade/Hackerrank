function designerPdfViewer(h, word) {
  var tallest = findTallestLetter(arrayTransform(h), word);
  return tallest * word.length;
}

function findTallestLetter(hObj, word) {
  var tallest = 0;
  for(var i = 0; i < word.length; i++) {
    var height = hObj[word[i].charCodeAt(0)];
    if (i === 0) {
      tallest = height;
    } else if (height > tallest) {
      tallest = height;
    }
  }
  return tallest;
}

function arrayTransform(h) {
  var obj = {};
  var strt = 97; // 'a' charcode
  for(var i = 0; i < h.length; i++) {
    obj[strt] = h[i];
    strt++;
  }
  return obj;
}

