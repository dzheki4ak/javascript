

const getSection = num => document
.querySelector(`span[data-number='${num}']`)
.closest('div').dataset.section;


getSection(2);