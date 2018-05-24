function mutateMyStrings(stringOne, stringTwo){
  let arrayOfWords = [stringOne, '\n'];
  let splittingEachLetter = stringOne.split('');
  for(let i in stringOne){
    if(stringOne[i] !== stringTwo[i]){
      splittingEachLetter[i] = stringTwo[i];
      arrayOfWords.push(splittingEachLetter.join('') + '\n');
    }
  }
  return arrayOfWords.join('');