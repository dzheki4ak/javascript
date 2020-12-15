const array = [-777, 3, -2, 6, 45, -20];

export const getMinSquaredNumber = array => {
     if (!Array.isArray(array)) {
          return null;
     }
     let absArray =  array.map(el => Math.abs(el));
     return Math.pow(Math.min.apply(null, absArray) , 2);
};

