let i, j;
let a = 0,
  b = 1,
  n = 10,
  temp,
  rs = "" + a + " " + b + "";

for (i = 0; i <= n; i++) {
  temp = Math.floor(a + b);
  a = b;
  b = temp;
  rs += " " + temp;
}
console.log(rs);
