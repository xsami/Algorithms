// TODO: complete a function that given a number return true if all it digits are even
// https://app.codesignal.com/challenge/nckaDwhQf2gb4HFhS
evenDigits = f = n => n & 1 ? false : n ? f(n/10) : true

// example: (24638802) => true, (245688) => false