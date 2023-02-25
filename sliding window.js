function MaxSum(arr, size) {
  let MaxSum = 0;
  for (let i = 0; i <= arr.length - size; i++) {
    let tempSum = 0;
    for (let j = i; j < i + size; j++) {
      tempSum = tempSum + arr[j];
    }
    if (tempSum > MaxSum) MaxSum = tempSum;
  }
  return MaxSum;
}

function MinSum(arr, size) {
  let MinSum = 0;
  for (let i = 0; i <= arr.length - size; i++) {
    let tempSum = 0;
    for (let j = i; j < i + size; j++) {
      tempSum += arr[j];
    }
    if (tempSum < MinSum) MinSum = tempSum;
  }
  return MinSum;
}

// console.log(MaxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)); // 12
console.log(MinSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)); // -28
