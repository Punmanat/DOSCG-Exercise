// If A = 21, A + B = 23, A + C = -21 - Please create a new function for finding B and C 
const A = 21;
let B;
let C;

const findBC = ()=>{
    B = 23 - A;
    C = -21 - A;
}
findBC()
module.exports = {
    B,C
}