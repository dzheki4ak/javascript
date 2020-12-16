import {getAdults, withdraw, reverseArray } from './tasks.js';

     it('returns an object of 18+ people', () => {
     const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }, 18);
     expect(result).toEqual({ 'John Doe': 19, 'Bob': 18 });
   });
   //2

   it('returns {} if input object values < minAge', () => {
     const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }, 20);
     expect(result).toEqual({});
   });
   //3
   
   it('returns the same obj if object values > minAge', () => {
     const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }, 15);
     expect(result).toEqual({'John Doe': 19, 'Tom': 17, 'Bob': 18});
   });





   it('returns a ballance after withdraw', () => {
     const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
     expect(result).toEqual(37);
   });
   //2
   it('returns -1 if amount > balance', () => {
     const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 100);
     expect(result).toEqual(-1);
   });
   //3
   it('returns NaN if user is not found', () => {
     const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Mike', 50);
     expect(result).toEqual(NaN);
   });





   it('returns a reversed array', () => {
     const result = reverseArray([1,2,3,4,5,6,7,8,9]);
     expect(result).toEqual([9,8,7,6,5,4,3,2,1]);
   });
   //2

   it('returns null if argument is not array', () => {
     const result = reverseArray('');
     expect(result).toEqual(null);
   });

   //3

   it('returns null if argument is not array', () => {
     const result = reverseArray([1,2,3,4]);
     expect(result).not.toEqual([1,2,3,4]);
   });