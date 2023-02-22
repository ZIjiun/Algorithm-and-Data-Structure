let str1 = "abbc";
let str2 = "abcbccc";

function sameFrequency(str1, str2) {
  let counter1 = {};
  let counter2 = {};

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    if (!counter1[str1.charAt(i)]) {
      counter1[str1.charAt(i)] = 1;
    } else {
      counter1[str1.charAt(i)]++;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!counter2[str2.charAt(i)]) {
      counter2[str2.charAt(i)] = 1;
    } else {
      counter2[str2.charAt(i)]++;
    }
  }

  for (let property in counter1) {
    if (counter1[property] !== counter2[property]) return false;
  }

  return true;

  //===========================
  // 先使用 split() 把字串轉換為陣列處理
  //   let arr1 = str1.split("");
  //   let arr2 = str2.split("");

  //   if (arr1.length !== arr2.length) return false;

  //   for (let i = 0; i < arr1.length; i++) {
  //     if (!counter1[arr1[i]]) {
  //       counter1[arr1[i]] = 1;
  //     } else {
  //       counter1[arr1[i]]++;
  //     }
  //   }

  //   for (let i = 0; i < str2.length; i++) {
  //     if (!counter2[str2[i]]) {
  //       counter2[str2[i]] = 1;
  //     } else {
  //       counter2[str2[i]]++;
  //     }
  //   }

  //   console.log(counter1);
  //   console.log(counter2);
}

console.log(sameFrequency(str1, str2));
