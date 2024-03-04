export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // enable next line.
    const task2 = false; // disable next line.
  }

  return [task, task2];
}
