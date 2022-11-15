function breakingRecords(scores) {
  // Write your code here
  let minimo = scores[0];
  let maximo = scores[0];

  let min = 0;
  let max = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > maximo) {
      max = max + 1;
      maximo = scores[i];
    }
    if (scores[i] < minimo) {
      min = min + 1;
      minimo = scores[i];
    }
  }

  return [`Record Maximo: ${max}`, `Record Minimo: ${min}`];
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
console.log(breakingRecords([12, 24, 10, 24]));
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
