function reverseArray(inArray) {
     let outArray = [...inArray];
     if (!Array.isArray(inArray)) {
          return null;
     } else {
          
          return outArray.reverse();
     }
}

const inArray = [1, 2, 3, 4, 2, 6, 8, 10, 12];