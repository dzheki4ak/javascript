
export function getAdults(object) {
     let adults = {};
     for (let elem in object) {
          if (object[elem] >= 18) {
               adults[elem] = object[elem];
          }
     }
     return adults;
}

/**************** */


export const withdraw = (clients, balances, client, amount) => {

     //put your code here
 
      let balIndex = clients.indexOf(client);
          if (amount > balances[balIndex]) {
              return -1;
          } else {
              return balances[balIndex] - amount;
          }
  
 };

 /***************** */

export function reverseArray(inArray) {
     let outArray = [...inArray];
     if (!Array.isArray(inArray)) {
          return null;
     } else {
          
          return outArray.reverse();
     }
}
