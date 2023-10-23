#!/usr/bin/node

function fibs(number){
    let fibon=[]
    let fibo1= 0;
    let fibo2= 1;
    let fiboT;
    for(let i= 0; i<= number; i++){
        
        fibon.push(fibo1)
        fiboT= fibo1+fibo2;
        fibo1= fibo2;
        fibo2=fiboT;
        
    };console.log(fibon);
};

function fibonacci(n) {
  if (n === 1) {
    return 0;
  } else if (n === 2 || n === 3 ) {
    return 1;
  } else {
    return( fibonacci(n - 1) + fibonacci(n - 2));
  }
}

let arrayToSort= [5, 2, 1, 3, 6, 4];
function mergeSort(array){
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
};
console.log(mergeSort(arrayToSort));