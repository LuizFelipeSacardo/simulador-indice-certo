function monthPoints(){
  const monthLine01 = document.querySelector('#monthLine01').value;
  const monthLine02 = document.querySelector('#monthLine02').value;
  const monthLine03 = document.querySelector('#monthLine03').value;
  const monthLine04 = document.querySelector('#monthLine04').value;
  const monthLine05 = document.querySelector('#monthLine05').value;
  const monthLine06 = document.querySelector('#monthLine06').value;
  const monthLine07 = document.querySelector('#monthLine07').value;
  const monthLine08 = document.querySelector('#monthLine08').value;
  const monthLine09 = document.querySelector('#monthLine09').value;

  return (Number(monthLine01) + Number(monthLine02) + Number(monthLine03) +  Number(monthLine04) + Number(monthLine05) + Number(monthLine06) + Number(monthLine07) + Number(monthLine08) + Number(monthLine09)) / 9;
}

export { monthPoints as default };