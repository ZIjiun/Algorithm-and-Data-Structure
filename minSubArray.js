console.log(minSubArray([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 9));

function minSubArray(arr, sum) {
  let start = 0;
  let end = 0;
  let tempSum = arr[0];
  let minLength = Infinity;

  if (arr.length == 0) return -1;

  while (true) {
    if (end == arr.length - 1 && tempSum < sum) {
      if (minLength == Infinity) return "can't find the sub array";
      return minLength;
    }

    if (tempSum < sum) {
      if (end < arr.length) end++;
      tempSum += arr[end];
    }

    if (tempSum >= sum) {
      let currentLength = end - start + 1;
      if (currentLength < minLength) {
        minLength = currentLength;
      }

      tempSum -= arr[start];
      start++;
    }
  }
}

// =================== 有註解 ===================
// function minSubArray(arr, sum) {
//   // 8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12
//   let start = 0;
//   let end = 0;
//   let tempSum = arr[0];
//   let minLength = Infinity;

//   if (arr.length == 0) return -1;

//   while (true) {
//     if (end == arr.length - 1 && tempSum < sum) {
//       if (minLength == Infinity) return "can't find the sub array";
//       return minLength;
//     }

//     if (tempSum < sum) {
//       if (end < arr.length) end++;

//       tempSum += arr[end];
//       console.log(` < , currentSum=${tempSum}, start=${start}, end=${end}`);
//       console.log("==================");
//     }

//     if (tempSum >= sum) {
//       //   console.log(` >= , currentSum=${tempSum}, start=${start}, end = ${end}`);

//       let currentLength = end - start + 1;
//       if (currentLength < minLength) {
//         minLength = currentLength;
//         console.log(
//           `> start = ${start}, end = ${end}, currentSum = ${tempSum}, minLength = ${minLength}`
//         );
//       }

//       tempSum -= arr[start];
//       start++;

//       console.log(
//         `minus start: start = ${start}, end = ${end}, currentSum = ${tempSum}, minLength = ${minLength}`
//       );
//       console.log("==================");
//     }
//   }
// }
