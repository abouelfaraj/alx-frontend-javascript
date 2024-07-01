export default function getListStudents(list) {
  if (Array.isArray(list)) {
    return list.map((obj) => obj.id);
  }

  return [];
}
