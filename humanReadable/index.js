// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
    const h = String(Math.floor(seconds / 3600));
    const m = String(Math.floor(seconds % 3600 / 60));
    const s = String(Math.floor(seconds % 3600 % 60));  
    const displayingTime = hoursValue => hoursValue.length > 1 ? hoursValue : `0${hoursValue}`
  
    return `${displayingTime(h)}:${displayingTime(m)}:${displayingTime(s)}`;
}

// console.log(humanReadable(0), '00:00:00', 'humanReadable(0)')
// console.log(humanReadable(5), '00:00:05', 'humanReadable(5)')
// console.log(humanReadable(60), '00:01:00', 'humanReadable(60)')
// console.log(humanReadable(86399), '23:59:59', 'humanReadable(86399)')
// console.log(humanReadable(359999), '99:59:59', 'humanReadable(359999)')