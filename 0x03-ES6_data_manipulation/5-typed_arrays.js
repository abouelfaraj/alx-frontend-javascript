export default function createInt8TypedArray(length, position, value) {
  const buf = new ArrayBuffer(length);
  const dv = new DataView(buf);

  // check if position outof rang
  if (position >= length) throw new Error('Position outside range');
  // set the value
  dv.setInt8(position, value);

  return dv;
}
