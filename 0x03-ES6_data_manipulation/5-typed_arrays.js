export default function createInt8TypeArray(length, position, value) {
  const arrBuffer = new ArrayBuffer(length);
  const dv = new DataView(arrBuffer);

  if (position >= length) throw new Error('Position outside range');
  dv.setInt8(position, value);

  return dv;
}
