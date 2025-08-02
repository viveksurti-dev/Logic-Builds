class palindromCheck {
  constructor() {}

  palindrom(s) {
    for (let i = 0; i <= s.length - 3; i++) {
      let rs = "";
      for (let j = i; j < i + 3; j++) {
        rs += s[j];
      }
      if (rs === rs.split("").reverse().join("")) {
        console.log(`${rs} `);
      }
    }
  }
}

const pc = new palindromCheck();
pc.palindrom("babad");
