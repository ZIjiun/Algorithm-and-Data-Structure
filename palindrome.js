console.log(palindrome("taco55cat"));

function palindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    console.log(str[left], str[right]);
    if (str[left] !== str[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}
