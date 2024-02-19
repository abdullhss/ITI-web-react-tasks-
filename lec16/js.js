

function* b(count) {
    let a = 0, b = 1;
    for (let i = 0; i < count; i++) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  const n = 10;
  for (const num of b(n)) {
    console.log(num);
  }

  console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");


  function* c(max) {
    let a = 0, b = 1;
    while (a <= max) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  const m = 100;
  for (const num of c(m)) {
    console.log(num);
}
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");


    let customR = {
        [Symbol.replace]: function (string) {
          if (string.length <= 15) {
            return string;
          } else {
            return string.slice(0, 15) + '...';
          }
        },
      };
    
      let longs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
      let replacedS = longs.replace(customR);
      console.log(replacedS);
