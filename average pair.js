averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
// 時間複雜度 O(n)
function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (left < right) {
    let temp_avg = (arr[left] + arr[right]) / 2;

    if (temp_avg > avg) {
      right--;
    } else if (temp_avg < avg) {
      left++;
    } else {
      result.push([arr[left], arr[right]]);
      right--;
      left++;
    }
  }

  console.log(result);

  // ========================
  // 巢狀迴圈做法
  //   let result = [];
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if ((arr[i] + arr[j]) / 2 == avg) {
  //         result.push([arr[i], arr[j]]);
  //       }
  //     }
  //   }

  // 時間複雜度太高
  //   // O(n^2)

  //   console.log(result);
  //   return result;
}
