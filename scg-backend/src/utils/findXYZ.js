// X, Y, 5, 9, 15, 23, Z  - Please create a new function for finding X, Y, Z value
let X;
let Y;
let Z;
const findZ = () => {
  let start = 5;
  let loop = 0;
  let step = 4;
  for (step; loop < 4; step += 2) {
    start += step;
    if (loop == 3) {
      Z = start;
    }
    loop++;
  }
};

const findXY = () => {
  let start = Z;
  let loop = 0;
  let step = 10;
  for (step; loop < 6; step -= 2) {
    start -= step;
    if (loop == 4) {
      Y = start;
    }
    if (loop == 5) {
      X = start;
    }
    loop++;
  }
};

findZ();
findXY();

module.exports = {
  X,
  Y,
  Z
};
