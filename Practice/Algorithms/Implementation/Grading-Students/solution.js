function gradingStudents(grades) {
  var multiple = 5;
  for(let i = 0; i < grades.length; i++) {
   if(!(grades[i] < 38)) {
     var diff = Math.ceil(grades[i] / multiple) * multiple - grades[i];
     if(diff < 3) {
      grades[i] = grades[i] + diff;
     }
   }
  }
  return grades;
}
