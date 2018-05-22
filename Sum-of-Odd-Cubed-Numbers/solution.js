function cubeOdd(arr) {

const reducer = (accumulator, currentValue) => accumulator + currentValue;
for (let i in arr) {
if(typeof arr[i] === 'string') 
return undefined;
}
let newArr = arr.map(x => x * x * x);
return newArr.filter(x => x % 2).reduce(reducer);
}