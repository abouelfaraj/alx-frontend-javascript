export default function cleanSet(set, startString) {
  let txt = '';
  const array = [];
  
  if (startString && typeof startString ==='string') {
    for (const elem of set) {
      if (elem && elem.startsWith(startString)) {
        array.push(elem.slice(startString.length));
      }
    }
    txt = array.join('-');
  }
  return txt;
}
