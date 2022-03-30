import monthPoints from './monthIndex.js';

const monthLine01 = document.querySelector('#monthLine01').addEventListener('click', updatePoints);
const monthLine02 = document.querySelector('#monthLine02').addEventListener('click', updatePoints);
const monthLine03 = document.querySelector('#monthLine03').addEventListener('click', updatePoints);
const monthLine04 = document.querySelector('#monthLine04').addEventListener('click', updatePoints);
const monthLine05 = document.querySelector('#monthLine05').addEventListener('click', updatePoints);
const monthLine06 = document.querySelector('#monthLine06').addEventListener('click', updatePoints);
const monthLine07 = document.querySelector('#monthLine07').addEventListener('click', updatePoints);
const monthLine08 = document.querySelector('#monthLine08').addEventListener('click', updatePoints);
const monthLine09 = document.querySelector('#monthLine09').addEventListener('click', updatePoints);
const points = monthPoints();

function updatePoints(){
  const resultsMonthPoints = document.querySelector('#resultsMonthPoints');  
  let points = monthPoints();
  resultsMonthPoints.innerHTML = `${points.toFixed(2)}`;
  possibleIndexes(points);
  changePointsColor(points);
}

function possibleIndexes(points){
  const resultsPossibleIndexes = document.querySelector('.results-month__indexes');
  let indexes = "";
  if(points >= 15){
    indexes =  "A, C"
  } else{
    indexes = "B, D"
  } 
  resultsPossibleIndexes.innerHTML = `${indexes}`;
}

function changePointsColor(points){
  const resultsMonthPoints = document.querySelector('#resultsMonthPoints');
  if(points >= 15){
    resultsMonthPoints.classList.remove('numberDown');
    resultsMonthPoints.classList.add('numberOver');
  } else{
    resultsMonthPoints.classList.remove('numberOver');
    resultsMonthPoints.classList.add('numberDown');
  }
}

possibleIndexes(points);