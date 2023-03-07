// let test = [];
// for (let i = 0; i < 100; i++) {
//   test.push(Math.floor(Math.random() * 100));
// }

function bubbleSort(arr) {
  let step = 0; // 計算互換的次數
  for (let i = 0; i <= arr.length - 2; i++) {
    let swapping = false;
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        step++; // 互換時 step + 1
        swapping = true;
        console.log(arr);
      }
    }
    if (swapping == false) break; // 如果在某一輪的比較中，沒有再進行 swap，就代表已經排序完成，所以可以退出迴圈了
  }
  console.log(`It takes ${step} steps to complete`);
  console.log(`result is ${arr}`);
}

/**
 * worst case
 * n=5;
 * 1/2 * n^2 - 1/2 *n
 * 25/2 - 5/2 = 10
 */
bubbleSort([5, 4, 3, 2, 1]);

/**
 * best case
 * O(n)
 * 將 0 排序到最前面後，因為已經排序完成，所以 swap 改成 false，退出迴圈
 */
bubbleSort([1, 2, 3, 4, 0, 5, 6, 7]);

/**
 * average case
 * 因為有 nested loop，所以平均是 O(n2)
 */
