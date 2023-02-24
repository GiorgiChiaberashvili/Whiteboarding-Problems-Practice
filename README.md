
Whiteboarding Problems

Whiteboarding Practice

Use your knowledge of data structures and time complexity to solve the following problems. These type of problems will not show up on the assessment but may be tested in coding interviews.

Be sure to apply Polya's Problem Solving framework when solving these problems:

Understand the problem
Devise a plan
Carry out the plan
Look back and refactor if necessary
In the context of this lesson, try to follow some of these steps when evaluating your solutions:

Determine and explain the time and space complexity of a function after you come to a solution
Discuss the potential for a more optimal solution
If a more optimal solution is discussed, implement that solution

logBetween

Define a function logBetween(lowNum, highNum) that will return an array from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum.

Examples:

logBetween(-1, 2);  // => [-1, 0, 1, 2]
logBetween(14, 6);  // => []
logBetween(4, 6);  // => [4, 5, 6]

logBetweenStepper

Write a function logBetweenStepper(min, max, step) that takes in three numbers as parameters. The function should return an array of numbers between min and max at step intervals.

Examples:

logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]

printReverse

Write a function printReverse(min, max) that returns an array of all numbers from max to min (exclusive), in reverse order.

Examples:

printReverse(13, 18) // => [17, 16, 15, 14]
printReverse(90, 94) // => [93, 92, 91]

fizzBuzz

Define a function fizzBuzz(max) that takes a number and returns an array of every number from 0 to max that is divisible by either 3 or 5, but not both.

Examples:

fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]

isPrime

Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.

Examples:

isPrime(2);  // => true
isPrime(10);  // => false
isPrime(11);  // => true
isPrime(9);  // => false
isPrime(2017);  // => true

maxValue

Write a function maxValue(array) that returns the largest value in array. Assume array is an array of numbers.

Examples:

maxValue([12, 6, 43, 2]);  // => 43
maxValue([]);  // => null
maxValue([-4, -10, 0.43]);  // => 0.43

myIndexOf

Write a function myIndexOf(array, target) that takes in an array of numbers and a target number as arguments. It should return the index value of the target if it is present in the array or -1 if it is not present.

CONSTRAINT: Do not use the indexOf or includes method

Examples:

myIndexOf([1,2,3,4],4); // => 3
myIndexOf([5,6,7,8],2); // => -1

factorArray

Write a function factorArray(array, number) that takes in an array of numbers and a number and returns an array of all the factors.

Examples:

factorArray([2,3,4,5,6],20) // => [2,4,5]
factorArray([2,3,4,5,6],35) // => [5]
factorArray([10,15,20,25],5) // => []

oddRange

Write a function oddRange(end) that takes in a number and returns an array containing all positive odd numbers up to end.

Examples:

oddRange(13);  // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6);  // => [ 1, 3, 5 ]

reverseHyphenString

Write a function reverseHyphenString(string) that takes in a hyphenated string and returns a the hyphenated string reversed.

Examples:

reverseHyphenString("Go-to-the-store") // => "store-the-to-Go"
reverseHyphenString("Jump,-jump-for-joy") // => "joy-for-jump-Jump,"

intersect

Write a function intersect(arr1, arr2) that takes in two arrays and returns a new array containing the elements common to both arr1 and arr2.

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) // => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) // => []

mirrorArray

Write a function mirrorArray(array) that takes in an array as an argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]);
  // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']);
  // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

abbreviate

Write a function abbreviate(sentence) that takes in a sentence string and returns a new sentence where words longer than 4 characters have their vowels removed. Assume the sentence has all lowercase characters. Feel free to use the array below in your solution: const vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('the bootcamp is fun'); // => 'the btcmp is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'

adults

Write a function adults(people) that takes in an array of person objects. The function should return an array containing the names of those who have an age of 18 or higher.

Example:

const ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

adults(ppl); // => [ 'John', 'Jane' ]

countScores

Write a function countScores(people) that takes in an array of score objects, people, as its input. A score object, people, has two key-value pairs: a name (string) and a score (number). countScores(people) should return an object that has key-value pairs where each name is a key and the value is their total score.

// Example 1:
const ppl = [
  { name: "Anthony", score: 10 },
  { name: "Fred", score : 10 },
  { name: "Anthony", score: -8 },
  { name: "Winnie", score: 12 }
];
countScores(ppl); // => { Anthony: 2, Fred: 10, Winnie: 12 }

// Example 2
const peeps = [
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 }
];

countScores(peeps); // => { Anthony: 4, Fred: 4, Winnie: 6 }

firstNPrimes

Using the isPrime function you made, write a function firstNPrimes(n) that returns an array of the first n prime numbers.

Examples:

firstNPrimes(0);  // => []
firstNPrimes(1);  // => [2]
firstNPrimes(4);  // => [2, 3, 5, 7]

peakFinder

Write a function peakFinder(array) that takes in an array of numbers. It should return an array containing the indes of all the peaks. A peak is an element that is greater than both of its neighbors. If it is the first or last element, it is a peak if it is greater than its one neighbor. Assume the array has a length of at least 2.

Examples:

peakFinder([1, 2, 3, 2, 1]); // => [2]
peakFinder([2, 1, 2, 3, 4, 5]); // => [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); // => [2, 6, 8]

divisibleByThreePairSum

Write a function divisibleByThreePairSum(array) that takes an array of numbers. It should return an array of all the pairs of indices, whose elements sum to a multiple of three.

Examples:

const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 // => [[1, 3]]

zipArray

Write a function zipArray(arr1, arr2) that takes in two arrays and "zips" them together by returning a single 2D-array. Assume that both input arrays have the same length.

Examples:

const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]

twoDimensionalTotal

Write a function twoDimensionalTotal(array) that takes in a 2D array of numbers and returns the total sum of all elements. Examples:

const arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

twoDimensionalTotal(arr1);  // => 40

const arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

twoDimensionalTotal(arr2);  // => 15

countInnerElement

Write a function countInnerElement(arr) that takes in a 2-D array of elements. Each element of arr is a sub array that contains multiple elements. The number of elements contained in each sub array are not the same. You can assume each sub array contains at least one element. You should return an object that counts how many times each element in each sub array repeats.

Examples:

const arr1 = [
  [1, 2, 4, 5],
  [2, 7, 4],
  [1, 4, 5, 2, 7]
]

countInnerElement(arr1)  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

const arr2 = [
  ['a','b','c','d'],
  ['a','b'],
  ['a','c','d','a']
]

countInnerElement(arr2)  // => {a: 4, b: 2, c: 2, d: 2}

twoDiff

Write a function twoDiff(array), given an array of numbers, return a 2-D array, where each of the sub array are indices of the two numbers such that their difference is 2. If there are no such numbers, return an empty array.

NOTE: The pairs are unique. HINT: Account for negative difference too!

Examples:


twoDiff([2, 3, 4, 6, 1, 7])  // => [[0, 2], [1, 4], [2, 3]]
twoDiff([0, 2, 4, 3, 5])  // => [[0, 1], [1, 2], [3,4]]
twoDiff([])  // => []

arrayDiff

Write a function arrayDiff(arr1, arr2) that takes in two arrays. The function should return a new array, containing the elements of arr1 that are not also in arr2.

Note: Assume both arrays have unique elements.

Examples:

const array1 = [1, 23, 2, 43, 3, 4]
const array2 = [3, 23]
arrayDiff(array1, array2)  // => [1, 2, 43 ,4]

const array3 = ['a', 'ab', 'c', 'd', 'c']
const array4 = ['d']
arrayDiff(array3, array4)  // => ['a', 'ab', 'c', 'c']

valueCounter

Write a function valueCounter(obj, val) that takes in an object and a value, the function should return the number of times val repeats as a value in obj.

Examples:

const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
valueCounter(obj1, 'Anne')  // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
valueCounter(obj2, 88)  // => 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
valueCounter(pairs, 'Roman')  // => 2

elementCount

Write a function elementCount(array) that returns a object. Each key corresponds to an element in the array and the value corresponds to how many times that element appears in the array.

Example:

elementCount(["a", "a", "b", "b"]); // => { "a" : 2, "b" : 2 }
elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }

nextTwoPrimes

Write a function nextTwoPrimes(num) that takes in a number num and returns the next two prime numbers greater than num.

Examples:

nextTwoPrimes(2);  // => [ 3, 5 ]
nextTwoPrimes(3);  // => [ 5, 7 ]
nextTwoPrimes(7);  // => [ 11, 13 ]
nextTwoPrimes(8);  // => [ 11, 13 ]
nextTwoPrimes(20);  // => [ 23, 29 ]
nextTwoPrimes(97);  // => [ 101, 103 ]

pairProduct

Write a function pairProduct(arr, num) that accepts an array of numbers, arr, and a target number, num. It should return pairs of indices whose elements multiply to num. No pair should appear twice in the result.

CONSTRAINT: Use only while loops. No for loops.

Examples:

pairProduct([1, 2, 3, 4, 5], 4); // => [ [ 0, 3 ] ]
pairProduct([1, 2, 3, 4, 5], 8); // => [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); // => [ [ 1, 3 ], [ 2, 4 ] ]

twoDimensionalSize

Write a function twoDimensionalSize(array) that takes in a 2D-array as an argument. The function should return the total number of elements in the 2D-array.

Examples:

const arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];
twoDimensionalSize(arr1);  // => 9

const arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];
twoDimensionalSize(arr2);  // => 5

longWordCount

Write a function longWordCount(string) that takes in a string and returns the number of words longer than 7 characters.

Examples:

longWordCount("");  // => 0
longWordCount("short words only");  // => 0
longWordCount("one reallylong word");  // => 1
longWordCount("two reallylong words inthisstring");  // => 2
longWordCount("allwordword longwordword wordswordword");  // => 3
longWordCount("seventy schfifty five");  // => 1

factorial

Write a function factorial(n), that returns the factorial of the number n. For example, the factorial of 4 is 4 * 3 * 2 * 1 = 24.

Examples:

factorial(1);  // => 1
factorial(4);  // => 24
factorial(5);  // => 120
factorial(10);  // => 3628800

lcm

Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both num1 and num2.

Examples:

lcm(2, 3);  // => 6
lcm(6, 10);  // => 30
lcm(24, 26);  // => 312

hipsterfyWord

Write a function hipsterfyWord(word) that takes takes in a string and returns the string with the last vowel removed. 'y' is not a vowel.

Examples:

hipsterfyWord('proper') // => 'propr'
hipsterfyWord('tonic') // => 'tonc'
hipsterfyWord('PANTHER') // => 'PANTHR'
hipsterfyWord('BACKWARDS') // => 'BACKWRDS'

hipsterfy

Write a function hipsterfy(sentence) that takes takes a string containing several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper");  // => "propr"
hipsterfy("proper tonic panther");  // => "propr tonc panthr"
hipsterfy("towel flicker banana");  // => "towl flickr banan"
hipsterfy("runner anaconda");  // => "runnr anacond"
hipsterfy("turtle cheeseburger fries");  // => "turtl cheeseburgr fris"

objectToString

Write a function objectToString(count) that takes in a char count object and returns a string representing the counts of each character.

Examples:

objectToString({ a : 2, b: 4, c: 1 }) // => 'aabbbbc'
objectToString({ b: 1, o: 2, t: 1 }) // => 'boot'

shortestWord

Write a function shortestWord(sentence) that returns the shortest word of a sentence. You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') // => 'is'
shortestWord('programming bootcamp') // => 'bootcamp'

greatestCommonFactor

Write a function greatestCommonFactor(num1, num2) that returns the largest number that divides both num1 and num2.

Examples:

greatestCommonFactor(15, 25) // => 5
greatestCommonFactor(16, 24) // => 8
greatestCommonFactor(7, 11) // => 1

isPassing

Write a function isPassing(assessments) that takes in an array of assessment objects. The function should return true if the average assessment score is at least 70. It should return false otherwise.

Examples:

const assessments1 = [
  { number: 1, score: 60 },
  { number: 2, score: 90 },
  { number: 3, score: 80 },
  { number: 4, score: 100 },
  { number: 5, score: 85 }
];

isPassing(assessments1) // => true
const assessments2 = [
  { number: 1, score: 60 },
  { number: 2, score: 20 },
  { number: 3, score: 45 }
];

isPassing(assessments2) // => false

valueConcat

Write a function valueConcat(array, obj) that takes in an array and object The function should return a new array where each element is concatenated with it's corresponding value from the object.

Examples:

const arr = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris' }
valueConcat(arr, obj) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], { b: 2, c: 3 }) // => [ 'a', 'b2', 'c3' ]

threeInARow

Write a function threeInARow(arr) that takes in an array of numbers and returns true if the array contains 3 of the same number consecutively. The function should return false otherwise.

Examples:

threeInARow([4, 3, 7, 7, 7, 13, 8]);  // => true;
threeInARow([10, 9, 20, 33, 3, 3]);  // => false;

variableNameify

Write a function variableNameify(words) that takes in an array of words. The function should return a string representing the variable name obtained by combining the words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) // => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) // => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) // => 'maxValue'

threeIncreasing

Write a function threeIncreasing(arr) that takes in an array of numbers and returns true if the array contains 3 consecutive numbers in increasing order. The function should return false otherwise. Note that the 3 consecutive numbers should be increasing by 1, so the the second number is 1 greater than the first, and the third number is 1 greater than the second.

Examples:

threeIncreasing([3, 2, 11, 12, 13, 2, 4]);  // => true
threeIncreasing([7, 2, 4, 5, 2, 1, 6]);  // => false

reverse2D

Write a function reverse2D(array) that takes in a 2D array of strings. The function should return a string representing the elements of the array in reverse order.

Examples:

const arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

reverse2D(arr1) // => 'ihgfedcba'
const arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
reverse2D(arr2) // => 'PatrickOscarMikeMattJulian'

reverb

Write a function reverb(word) that takes in a word string and returns the word with all characters after the last vowel repeated.

Examples:

reverb('running');  // => 'runninging'
reverb('wild');  // => 'wildild'
reverb('debugged');  // => 'debuggeded'
reverb('my');  // => 'my'

countRepeats

Write a function countRepeats(string) that takes in a string and returns the number of letters that appear more than once in the string. You may assume the string contains only lowercase letters. Count the number of letters that repeat, not the number of times they repeat in the string.

Examples:

countRepeats('calvin'); // => 0
countRepeats('caaaalvin'); // => 1
countRepeats('pops'); // => 1
countRepeats('mississippi'); // => 3
countRepeats('hellobootcampprep'); // => 4

pairsToString

Write a function pairsToString(arr) that takes in an array of pairs. The function should return a string corresponding to the pairs.

Examples:

const array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];
pairsToString(array1);  // => 'aaabcc'

const array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];
pairsToString(array2);  // => 'food!'

countAdjacentSums

Write the function countAdjacentSums(arr, n) that takes an array and number. It should count the number of times that two adjacent numbers in an array add up to n.

Examples:

countAdjacentSums([1, 5, 1], 6) // => 2
countAdjacentSums([7, 2, 4, 6], 7) // => 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) // => 3

signFlipCount

Write a function signFlipCount(nums) that takes in an array of numbers as arguments. The function should return the number of times adjacent numbers in the array switch signs from positive to negative or vice versa. The number 0 is neither positive nor negative.

Examples:

signFlipCount([5, 6, 10, 3]); // => 0
signFlipCount([-12, 0, -3, -5]); // => 0
signFlipCount([-12, 10, -3, -5]); // => 2
signFlipCount([1, -2, -3, -4]); // => 1
signFlipCount([-1, 11.3, -3, 100]); // => 3

powerSequence

Write a function powerSequence(base, length) that takes in two numbers, base and length. The function should return an array containing a power sequence with the given length. Assume that the length is at least 1.

The first number of a power sequence begins with base. The second number of the sequence is the product between the first number and the base. The third number of the sequence is the product between the second number and the base...

Examples:

powerSequence(3, 4);  // => [ 3, 9, 27, 81 ]
powerSequence(2, 6);  // => [ 2, 4, 8, 16, 32, 64 ]
powerSequence(8, 3);  // => [ 8, 64, 512 ]

collapseString

Write a function collapseString(str) that takes in a string as an argument. The function should return the string where 'streaks' of consecutive characters are collapsed to a single character.

Hint: use the keyword continue

Examples:

collapseString('apple'); // => 'aple'
collapseString('AAAaalviiiiin!!!'); // => 'Aalvin!'
collapseString('hello   app academy'); // => 'helo ap academy'

oddWordsOut

Write a function oddWordsOut(sentence) that takes in a sentence string and returns the sentence where words with an odd number of characters are removed.

Examples:

oddWordsOut('go to the store and buy milk');  // => 'go to milk'
oddWordsOut('what is the answer');  // => 'what is answer'

mindPsAndQs

Write a function mindPsAndQs(str) that accepts a string of uppercase letters. The function should return the length of the longest consecutive streak of the letters 'P' and 'Q'.

Hint: Use two variables. One to track the length of the current streak and another to track the length of the longest streak so far. Think of using a strategy similar to maxValue. This can also be solved using a single loop!

Nested loops not needed!

Examples:

mindPsAndQs('BOOTCAMP');  // => 1
mindPsAndQs('APCDQQPPC');  // => 4
mindPsAndQs('PQPQ');  // => 4
mindPsAndQs('PPPXQPPPQ');  // => 5

commonFactors

Write a function commonFactors(num1, num2) that returns an array that contains the common factors between both numbers. A factor is a number that divides another number with no remainder.

Examples:

commonFactors(12, 50);  // => [ 1, 2 ]
commonFactors(6, 24);  // => [ 1, 2, 3, 6 ]
commonFactors(11, 22);  // => [ 1, 11 ]
commonFactors(45, 60);  // => [ 1, 3, 5, 15 ]

commonPrimeFactors

Write a function commonPrimeFactors(num1, num2) that takes in two numbers as arguments and returns an array of all prime factors that are common between the two numbers. A factor is a number that divides another number without resulting in a remainder.

Examples:

commonPrimeFactors(12, 50);  // => [ 2 ]
commonPrimeFactors(6, 24);  // => [ 2, 3 ]
commonPrimeFactors(11,22);  // => [ 11 ]
commonPrimeFactors(45, 60);  // => [ 3, 5 ]

splitHalfArray

Write a function splitHalfArray(array) that takes in an array as an argument and returns two halves of that array split in the middle. If the array has an odd number of elements, then the middle element should be excluded.

Examples:

splitHalfArray([1, 2, 3, 4, 5]);
  // => [ [ 1, 2 ], [ 4, 5 ] ]

splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

threeUniqueVowels

Write a function threeUniqueVowels(string) that takes in a string and returns true if the string contains at least three different vowels.

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
Examples:

threeUniqueVowels('delicious');  // => true
threeUniqueVowels('the bootcamp');  // => true
threeUniqueVowels('bootcamp');  // => false
threeUniqueVowels('dog');  // => false
threeUniqueVowels('go home');  // => false

vowelShift

Write a function vowelShift(sentence) that takes in a sentence string. The function should return a new sentence, where every vowel is replaced with the next vowel in the alphabet.

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
Examples:

vowelShift('bootcamp');  // => 'buutcemp'
vowelShift('hello world');  // => 'hillu wurld'
vowelShift('on the hunt');  // => 'un thi hant'

hasSymmetry

Write a function hasSymmetry(array) that takes in an array. The function should return true if the array has symmetry, false otherwise. For an array to have symmetry, it should be the same forwards and backwards.

TIP: In JavaScript, it is not possible to compare arrays for equality with ===. In other words, [1, 2, 3] === [1, 2, 3] evaluates to false.

Examples:

hasSymmetry([1, 2, 3, 3, 2, 1]) // => true
hasSymmetry([1, 2, 3, 3, 4, 1]) // => false
hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) // => true
hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) // => false

evenSumArray

Write a function evenSumArray(array) that takes in an array of numbers and returns a new array where each num is replaced with the sum of all even numbers less than or equal to that num.

Examples:

evenSumArray([6, 7, 5]) // => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) // => [ 2, 20, 2, 6 ]

numsToWords

Write a function numsToWords(numString) that takes in a string representing a number. The function should return a new string where each digit character is replaced with it's "word" representation. Assume the input string only contains numeric characters.

Examples:

numsToWords('42') // => 'FourTwo'
numsToWords('123') // => 'OneTwoThree'
numsToWords('159598') // => 'OneFiveNineFiveNineEight'

moreDotLessDash

Write a function moreDotLessDash(str) that takes in a string and returns the true if the string contains more dots ('.') than dashes ('-'), false otherwise.

Examples:

moreDotLessDash('2-D arrays are fun. I think.');  // => true
moreDotLessDash('.-.-.');  // => true
moreDotLessDash('.-');  // => false
moreDotLessDash('..--');  // => false
