// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    const numbersArray = numbers.split(" ")
    const orderedArray = numbersArray.sort((a,b) => Number(b) - Number(a));
    return `${orderedArray[0]} ${orderedArray[orderedArray.length - 1]}`
}

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"