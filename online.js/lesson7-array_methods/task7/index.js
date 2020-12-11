
function increaseEvenEl(arr, delta) {
     if (!Array.isArray(arr)) {
          return null;
     } else {
          return arr.filter(element => element % 2 === 0).map(element => element + delta);
     }
}
