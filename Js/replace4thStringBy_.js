let s = "abcdefghijklmnopqrstuvwxyz";
let rs = "";

for (let i = 0; i < s.length; i++) {
  if ((i + 1) % 4 === 0) {
    rs += "_";
  } else {
    rs += s[i];
  }
}
console.log(rs);
