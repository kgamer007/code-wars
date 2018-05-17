var gimme = function (inputArray) {
  let midName = inputArray.slice().sort((a,b) => a-b)[1];
  return inputArray.indexOf(midName);
};