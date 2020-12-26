const boxes = 'aaaaca31';

function countBoxes(boxes) {
  let stringArr = boxes.split('');
  let object = Object.assign({}, stringArr.map(el => el = el));


  console.log(stringArr);
  console.log(object);
}
countBoxes(boxes);