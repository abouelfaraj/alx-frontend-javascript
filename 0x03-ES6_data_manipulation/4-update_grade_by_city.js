export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((obj) => obj.location === city).map((obj) => ({ ...obj, grade: newGrades.filter((x) => x.studentId === obj.id).map((x) => x.grade)[0] || 'N/A' }));
}
