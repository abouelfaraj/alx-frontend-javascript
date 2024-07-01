export default function (list) {
  return list.reduce((counter, currentObj) => counter + currentObj.id, 0);
}
