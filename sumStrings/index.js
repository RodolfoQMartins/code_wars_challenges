// Given the string representations of two integers, return the string representation of the sum of those integers.

function sumStrings(a,b) { 
    return String((BigInt(a) + BigInt(b)));
}

// sumStrings('1','2') // => '3'