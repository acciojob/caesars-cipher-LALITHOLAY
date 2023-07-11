// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
 for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i].toUpperCase();

    if (lookup.hasOwnProperty(char)) {
      decodedArr.push(lookup[char]);
    } else {
      decodedArr.push(char);
    }
  }

  return decodedArr.join('');
}

console.log(rot13("SERR YBIR? NPPVBWBO"));
 
// Do not change this line
window.rot13 = rot13;
