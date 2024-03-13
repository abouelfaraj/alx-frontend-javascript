export const weakMap = new WeakMap();
let count = 1;

export function queryAPI(endPoint) {
  weakMap.set(endPoint, count);
  count += 1;
  const qCount = weakMap.get(endPoint);
  if (qCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
