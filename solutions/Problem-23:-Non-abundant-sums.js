function sumOfNonAbundantNumbers(n) {
  // Create an array to store abundant numbers up to n
  const abundantNumbers = [];

  // Function to check if a number is abundant
  function isAbundant(num) {
    let sum = 0;
    // Iterate through divisors excluding 1 and the number itself
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        if (num / i !== i) {
          sum += num / i;
        }
      }
    }
    return sum > num;
  }

  // Find all abundant numbers less than or equal to n
  for (let i = 1; i <= n; i++) {
    if (isAbundant(i)) {
      abundantNumbers.push(i);
    }
  }

  // Create an array to store if a number can be expressed as sum of abundant numbers
  const canBeExpressed = new Array(n + 1).fill(false);

  // Loop through all pairs of abundant numbers and mark their sums as expressible
  for (let i = 0; i < abundantNumbers.length; i++) {
    for (let j = i; j < abundantNumbers.length; j++) {
      const sum = abundantNumbers[i] + abundantNumbers[j];
      if (sum <= n) {
        canBeExpressed[sum] = true;
      }
    }
  }

  // Find the sum of non-abundant numbers (numbers that cannot be expressed as sum of abundant numbers)
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (!canBeExpressed[i]) {
      sum += i;
    }
  }

  return sum;
}
