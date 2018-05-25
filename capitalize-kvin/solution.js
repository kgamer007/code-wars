function capitalize(string,array){
  let splitStr = string.split(''); //splits 
  let newCapArray = [];
  for (let i = 0; i < string.length; i++){
    if (array.includes(i)){
      splitStr[i] = splitStr[i].toUpperCase();
    }
    newCapArray.push(splitStr[i]);
  }
  return newCapArray.join('');
  }