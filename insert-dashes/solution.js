function insertDash(num) {
  let numbers = num.toString().split('');
  // console.log(numbers);
  for(let i = 0; i < numbers.length-1; i++){
  if (parseInt(numbers[i]) %2 === 1 && parseInt(numbers[i+1]) %2 === 1) {
  numbers[i] = numbers [i] + '-';
  }
  }
  return numbers.join('');
  }