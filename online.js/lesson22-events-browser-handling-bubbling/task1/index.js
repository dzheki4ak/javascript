/* eslint-disable no-return-assign */
/*
      <!-- this spans are generated with clicks -->
      <!-- <span style="color: grey; margin-left: 8px">div</span>
      <span style="color: grey; margin-left: 8px">p</span>
      <span style="color: green; margin-left: 8px">p</span>
      <span style="color: green; margin-left: 8px">div</span> -->
*/

const pasteElem = (color, elem) => {
     document.querySelector('.events-list')
          .innerHTML += `<span style="color: ${color}; margin-left: 8px">${elem}</span>`;
}

const div = document.querySelector('.rect_div');
const p = document.querySelector('.rect_p');
const span = document.querySelector('.rect_span');

const greyDiv = pasteElem.bind(null, 'grey', 'DIV');
const greyP = pasteElem.bind(null, 'grey', 'P');
const greySpan = pasteElem.bind(null, 'grey', 'SPAN');

const greenDiv = pasteElem.bind(null, 'green', 'DIV');
const greenP = pasteElem.bind(null, 'green', 'P');
const greenSpan = pasteElem.bind(null, 'green', 'SPAN');

const attachHandlers = () => {
     div.addEventListener('click', greyDiv, true);
     div.addEventListener('click', greenDiv);
     p.addEventListener('click', greyP, true);
     p.addEventListener('click', greenP);
     span.addEventListener('click', greySpan, true);
     span.addEventListener('click', greenSpan);
};

const removeHandlers = () => {
     div.removeEventListener();
     p.removeEventListener();
     span.removeEventListener();
};

const eventClean = () => document.querySelector('.events-list').innerHTML = '';
const clearBtn = document.querySelector('.clear-btn');
const clearer = eventClean.bind();
clearBtn.addEventListener('click', clearer);

const handlerRemoveBtn = document.querySelector('.remove-handlers-btn');
const remover = removeHandlers.bind();
handlerRemoveBtn.addEventListener('click', remover);

const handlerAttachBtn = document.querySelector('.attach-handlers-btn');
const attacher = attachHandlers.bind();
handlerAttachBtn.addEventListener('click', attacher);


