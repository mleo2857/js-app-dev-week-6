// const max = process.argv[2];
// let FizzBuzz = {
//   [Symbol.iterator]() {
//     let current = 0;
//     return {
//       next(){
//         [current] = [current + 1];
//         let ret = [];
//         if (current > max) return {done: true};
//         if (current % 3 === 0 && current % 5 === 0) {ret.push('FizzBuzz')};
//         if (current % 3 === 0){ret.push('Fizz')};
//         if (current % 5 === 0){ret.push('Buzz')};
//       }
//     };
//   }
// };

const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let cur = 0;
    // The resulting iterator object has to have a next method:
    return {
      next() {
        cur++;
        let ret = [];
        if (cur % 3 === 0)
           ret.push('Fizz');
        if (cur % 5 === 0)
           ret.push('Buzz');
        if (cur > max)
          return { done: true };
        return { done: false, value: ret.join('') || cur };
      }
    }

  }
};

for (var n of FizzBuzz) {
  console.log(n);
};
