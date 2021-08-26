// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    const resultArray = []
    for(let i = arr.length - 1; i >= 0; i--) {
      const actualValue = arr[i];
      if(actualValue === 0) {
        resultArray.push(actualValue);
      } else {
        resultArray.unshift(actualValue);
      }
    }
    
    return resultArray;
}

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
