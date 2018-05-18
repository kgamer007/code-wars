function solution(str){
  let strArray = str.split('');
    let reverseStr = [];
    for (let i = 0; i < strArray.length; i++) {
    reverseStr.unshift(str[i])
  //   console.log(reverseStr.join(''));
  } 
    return reverseStr.join('');
  }