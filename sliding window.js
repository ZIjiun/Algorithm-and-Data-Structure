function maxSum(arr, size) {
  let maxSum = 0;

  for (let i = 0; i < size; i++) {
    maxSum += arr[i];
  }

  let previousSum = maxSum;

  for (let i = 1; i <= arr.length - size; i++) {
    let tempSum = 0;

    tempSum = previousSum - arr[i - 1] + arr[i + size - 1];

    if (tempSum > maxSum) {
      maxSum = tempSum;
    }

    previousSum = tempSum;
  }

  return maxSum;
}

function minSum(arr, size) {
  let minSum = 0;

  for (let i = 0; i < size; i++) {
    minSum += arr[i];
  }

  let previousSum = minSum;

  for (let i = 1; i <= arr.length - size; i++) {
    let tempSum = 0;
    tempSum = previousSum - arr[i - 1] + arr[i + size - 1];

    if (tempSum < minSum) {
      minSum = tempSum;
    }

    previousSum = tempSum;
  }

  return minSum;
}

console.log(maxSum([2, 7, 3, 7, 25, 0, 6, 1, -5, -12, -11], 3)); // 35
console.log(minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)); // -28
