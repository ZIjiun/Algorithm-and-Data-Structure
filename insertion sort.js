function insertionSort(arr) {
  for (let j = 1; j <= arr.length - 1; j++) {
    let key = arr[j];
    let i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i -= 1; // key 一直往前做比較
    }
    arr[i + 1] = key; // key 跟下一個 i 比較的時候，key 比較大，所以放在 (i + 1) 的位置
    // console.log(arr);
  }
  return arr;
}

let unsorted = [14, -4, 17, 6, 22, 1, -5];
console.log(insertionSort(unsorted));
