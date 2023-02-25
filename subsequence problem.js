console.log(isSubsequence("book", "brooklyn"));

function isSubsequence(str1, str2) {
  let pointer1 = 0; //指向 str1
  let pointer2 = 0; //指向 str2
  let result = [];
  let strArray = str1.split("");

  //   while (pointer2 <= str2.length) {
  //     if (pointer1 >= str1.length) pointer1--;
  //     if (str1[pointer1] == str2[pointer2]) {
  //       result.push(str1[pointer1]);
  //       pointer1++;
  //       pointer2++;
  //     } else if (str1[pointer1] !== str2[pointer2]) {
  //       pointer2++;
  //     }
  //   }

  // =====================================改良
  while (pointer2 < str2.length) {
    if (str1[pointer1] == str2[pointer2]) {
      pointer1++;
    }
    if (pointer1 >= str1.length) {
      return true;
    }
    pointer2++;
  }
  return false;
}
