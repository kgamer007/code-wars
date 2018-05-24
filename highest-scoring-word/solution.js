function high(sentence){ //'take me to semynak'
const addCharCodes = ((accumlator, letter) => accumlator + letter.charCodeAt(0)-96);
  return sentence.split(' ') //[take, me, to, semynak]
    .map(word => {
        return { // TODO - make this the actual score
        theScoreForWord: word.split('').reduce(((accumlator, letter) => accumlator + letter.charCodeAt(0)-96), 0),
        theWord: word,
        };
    })
    .sort((wordObjectA, wordObjectB) => wordObjectB.theScoreForWord - wordObjectA.theScoreForWord)[0].theWord
}