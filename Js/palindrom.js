let s = "abab";
let i;
let rev = s.split("").reverse().join("");

if (s === rev) {
  console.log("is palindrome");
} else {
  console.log("is not palindrome");
}
