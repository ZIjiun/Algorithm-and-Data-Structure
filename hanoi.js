let step = 0;
function hanoi(n, from, to, buf) {
  if (n == 1) {
    step++;
    console.log(`Move from ${from} to ${to}`);
  } else {
    hanoi(n - 1, from, buf, to);
    console.log(`Move from ${from} to ${to}`);
    step++;
    hanoi(n - 1, buf, to, from);
  }
}

hanoi(3, "A", "C", "B");
console.log(`共執行${step}步驟`);
