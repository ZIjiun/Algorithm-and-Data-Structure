uniqueLetterString("thisishowwedoit");

function uniqueLetterString(str) {
  let start = 0;
  let end = 0;
  let counter = {};
  let longestLength = -Infinity;
  let arr = str.split("");

  while (end < arr.length) {
    console.log(`arr[end]=${arr[end]}`);
    if (!counter[arr[end]]) {
      counter[arr[end]] = 1;
      let tempLength = 0;
      for (let property in counter) {
        tempLength++;
      }
      if (tempLength > longestLength) longestLength = tempLength;
      end++;
      console.log(`start=${start}, end = ${end}`);
      console.log(counter);
      console.log("============================");
    } else if (counter[arr[end]]) {
      delete counter[arr[start]];
      start++;
      console.log(`start = ${start}, end = ${end}`);
      console.log(counter);
      console.log("============================");
    }
  }

  if (longestLength === -Infinity) {
    return "can't find the longest substring";
  }

  console.log(longestLength);
  return longestLength;
}

// ================老師解法==================
// function uniqueLetterString(str) {
//   let start = 0;
//   let end = 0;
//   let counter = {};
//   let maxLength = -Infinity;

//   while (end < str.length) {
//     // console.log(counter);
//     // 如果 counter[str[end]] 是 1，就會變成 true
//     if (counter[str[end]]) {
//       console.log("if area");
//       console.log(counter[str[end]]);
//       counter[str[start]]--;
//       console.log(counter);
//       console.log("====================");
//       start++;
//     } else {
//       console.log("else area");
//       counter[str[end]] = 1;
//       // end 已經先經過 +1，所以下面的 end - start 不用再 -1
//       end++;
//       console.log(start);
//       console.log(end);
//       if (end - start > maxLength) {
//         maxLength = end - start;
//       }
//       console.log(counter);
//       console.log(`maxLength=${maxLength}`);
//       console.log("======================");
//     }
//   }

//   if (maxLength == -Infinity) {
//     console.log("Cannot find unique letters substring.");
//     return null;
//   }

//   console.log(maxLength);
//   return maxLength;
// }
