const menuMonth = document.querySelector('#menuMonth');
const menuRecurrence = document.querySelector('#menuRecurrence');
const bodyMonth = document.querySelector('#bodyMonth');
const bodyRecurrence = document.querySelector('#bodyRecurrence');
const resultsMonth = document.querySelector('#resultsMonth');
const resultsRecurrence = document.querySelector('#resultsRecurrence');

menuMonth.addEventListener('click', showMonth);
menuRecurrence.addEventListener('click', showRecurrence);

function showMonth(){
  bodyMonth.classList.remove('hide');
  resultsMonth.classList.remove('hide');
  bodyRecurrence.classList.add('hide');
  resultsRecurrence.classList.add('hide');

  menuMonth.classList.remove('button-not-highlight');
  menuMonth.classList.remove('button-highlight');
  menuRecurrence.classList.remove('button-highlight');
  menuRecurrence.classList.remove('button-not-highlight');
  menuMonth.classList.add('button-highlight');
  menuRecurrence.classList.add('button-not-highlight');
}

function showRecurrence(){
  bodyMonth.classList.add('hide');
  resultsMonth.classList.add('hide');
  bodyRecurrence.classList.remove('hide');
  resultsRecurrence.classList.remove('hide');

  menuMonth.classList.remove('button-not-highlight');
  menuMonth.classList.remove('button-highlight');
  menuRecurrence.classList.remove('button-highlight');
  menuRecurrence.classList.remove('button-not-highlight');
  menuMonth.classList.add('button-not-highlight');
  menuRecurrence.classList.add('button-highlight');
}


