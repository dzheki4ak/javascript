// simple assertions  

it('Check if 17 = 17', () => {
     expect(17).toEqual(17);
});

it('Check if 18 != 17', () => {
     expect(18).not.toEqual(17);
});

const getEvenNumbers = (array) => {
    let result = array.filter(el => el % 2 === 0);
    return result;
};


it('returns array of even numbers', () => {
     const result = getEvenNumbers([1,2,3,4,5,6,7,8,9]);
     expect(result).toEqual([2, 4, 6, 8]);
});
