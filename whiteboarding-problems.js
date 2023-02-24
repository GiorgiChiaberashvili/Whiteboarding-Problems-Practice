function logBetween(lowNum, highNum) {
    let logged = [];

    for (let i = lowNum; i <= highNum; i++) {
        logged.push(i);
    }
    return logged;
}

// Time Complexity is
// Space Complexity is


function logBetweenStepper(min, max, step) {
    let array = [];

    for (let i = min; i < max; i += step) {
        array.push(i);
    }
    return array;
}

// Time Complexity is
// Space Complexity is

function printReverse(min, max) {
    let array = [];

    for (let i = max; i >= min; i--) {
        array.push(i);
    }
    return array;
}

// Time Complexity is
// Space Complexity is

function fizzBuzz(max) {
    let numArray = [];

    for (let i = 0; i < max; i++) {
        if ((i % 3 === 0 && i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            numArray.push(i);
        }
    }
    return numArray;
}

// Time Complexity is
// Space Complexity is


function isPrime(number) {
    if (number < 2) {
        return false;
    }
    let i = 2;
    while (i < number) {
        if (number % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}

// Time Complexity is
// Space Complexity is

function maxValue(array) {
    let max = null;

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (max === null || num > max) {
            max = num;
        }
    }
    return max;
}

// Time Complexity is
// Space Complexity is

function myIndexOf(array, target) {

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (num === target) {
            return i;
        }
    }
    return -1;
}

// Time Complexity is
// Space Complexity is

function factorArray(array, number) {
    let factored = [];

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (number % num === 0) {
            factored.push(num);
        }
    }
    return factored;
}

// Time Complexity is
// Space Complexity is

function oddRange(end) {
    let odds = [];

    for (let i = 1; i < end; i += 2) {
        odds.push(i);
    }
    return odds;
}

// Time Complexity is
// Space Complexity is

function reverseHyphenString(string) {
    let word = string.split(" - ");
    let reversedWords = word.reverse();
    let reversedString = reversedWords.join('')
    return reversedString
}

// Time Complexity is
// Space Complexity is

function intersect(arr1, arr2) {
    let intersected = [];
    let set = new Set(arr1);

    for (let i = 0; i < arr2.length; i++) {
        if (set.has(arr2[i])) {
            intersected.push(arr2[i])
        }
    }
    return intersected;
}

// Time Complexity is
// Space Complexity is

function mirrorArray(array) {
    const mirroredArray = new Array(array.length * 2)

    for (let i = 0; i < array.length; i++) {
        mirroredArray[i] = array[i]
    }

    for (let i = array.length - 1; i >= 0; i--) {
        mirroredArray[mirroredArray.length - i - 1] = array[i];
    }
    return mirroredArray;
}

// Time Complexity is
// Space Complexity is

function abbreviate(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let newsentence = ""

    for (let i = 0; i < sentence.length; i++) {
        let word = sentence[i]
        if (!vowels.includes(word.toLowerCase())) {
            newsentence += word;
        }
    }
    return newsentence;
}

// Time Complexity is
// Space Complexity is

function adults(people) {
    let adulted = [];

    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        let minage = people.age
        if (person >= minage) {
            adulted.push(person);
        }
    }
    return adulted;
}

// Time Complexity is
// Space Complexity is

function countScores(people) {
    let scores = {};

    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        let name = person.name;
        let score = person.score

        if (scores[name]) {
            scores[name] += score;
        } else {
            scores[name] = score;
        }
    }
    return scores;
}

// Time Complexity is
// Space Complexity is

function firstNPrimes(n) {
    let primes = [];
    let num = 2;

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num)
        }
        num++;
    }
    return primes;
}

// Time Complexity is
// Space Complexity is

function peakFinder(array) {
    let peaks = [];

    for (let i = 0; i < array.length; i++) {
        let number = array[i]
        if (number > array[i - 1] && number > array[i + 1]) {
            peaks.push(number)
        }
    }
    return peaks;
}

// Time Complexity is
// Space Complexity is

function divisibleByThreePairSum(array) {
    const result = []

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            const sum = array[i] + array[j]
            if (sum % 3 === 0) {
                result.push([i, j])
            }
        }
    }
    return result;
}

// Time Complexity is
// Space Complexity is

function zipArray(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {

        let el1 = arr1[i];
        let el2 = arr2[i];

        result.push([el1, el2]);
    }
    return result;
}

// Time Complexity is
// Space Complexity is

function twoDimensionalTotal(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            total += array[i][j];
        }
    }
    return total;
}

// Time Complexity is
// Space Complexity is

function countInnerElement(arr) {
    const object = {};

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const element = arr[i][j];

            if (object[element]) {
                object[element]++
            } else {
                object[element] = 1;
            }
        }
    }
    return object;
}

// Time Complexity is
// Space Complexity is

function twoDiff(array) {
    const output = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (Math.abs(array[i] - array[j]) === 2) {
                output.push([i, j]);
            }
        }
    }
    return output;
}

// Time Complexity is
// Space Complexity is


function arrayDiff(arr1, arr2) {
    return arr1.filter(element => !arr2.includes(element));
}

// Time Complexity is
// Space Complexity is

function valueCounter(obj, val) {
    let count = 0;
    const values = Object.values(obj);

    values.forEach(element => {
        if (element === val) {
            count++;
        }
    })
    return count;
}

// Time Complexity is
// Space Complexity is

function elementCount(array) {
    let pairs = {};

    for (let i = 0; i < array.length; i++) {
        let key = array[i];
        let val = key.value;
        let score = key.score;

        if (pairs[val]) {
            pairs[val] += score;
        } else {
            pairs[val] = score;
        }
    }
    return pairs;
}

// Time Complexity is
// Space Complexity is

function nextTwoPrimes(num) {
    let primes = [];
    let count = 0;
    let nextPrime = num + 1;

    while (count < 2) {
        if (isPrime(nextPrime)) {
            primes.push(nextPrime)
        }
        nextPrime++;
    }
    return primes;
}

// Time Complexity is
// Space Complexity is

function pairProduct(arr, num) {
    let pairs = [];
    let i = 0;
    while (i < arr.length) {
        let j = i + 1;
        while (j < arr.length) {
            if (arr[i] * arr[j] === num) {
                pairs.push([i, j]);
            }
            j++;
        }
        i++;
    }
    return pairs;
}

// Time Complexity is
// Space Complexity is

function twoDimensionalSize(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        count += array[i].length
    }
    return count
}

// Time Complexity is
// Space Complexity is

function longWordCount(string) {
    let selectedwordcount = 0;

    let words = string.split('')
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        if (word.length > 7) {
            selectedwordcount++;
        }
    }
    return selectedwordcount;
}

// Time Complexity is
// Space Complexity is

function factorial(n) {

}

// Time Complexity is
// Space Complexity is

function lcm(num1, num2) {

}

// Time Complexity is
// Space Complexity is

function hipsterfyWord(word) {
    const vowels = "aeiouAEIOU";

    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i];
        if (vowels.includes(char)) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
}

// Time Complexity is
// Space Complexity is

function hipsterfy(sentence) {
    const vowels = "aeiouAEIOU";
    let words = sentence.split(" ");
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        for (let j = word.length - 1; j >= 0; j--) {
            let char = word[j];
            if (vowels.includes(char)) {
                word = word.slice(0, j) + word.slice(j + 1);
                break;
            }
        }
        newWords.push(word);
    }

    return newWords.join(" ");
}

// Time Complexity is
// Space Complexity is

function objectToString(count) {

}

// Time Complexity is
// Space Complexity is

function shortestWord(sentence) {
    let words = sentence.split(" ");
    let shortest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }
    return shortest;
}

// Time Complexity is
// Space Complexity is

function greatestCommonFactor(num1, num2) {
    let number = [];

    for (let i = 1; i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            number.push(i);
        }
    }
    return number;
}

// Time Complexity is
// Space Complexity is

function isPassing(assessments) {
    let passingScore = 70;

    for (let i = 0; i < assessments.length; i++) {
        let score = assessments[i].score;

        if (score > passingScore) {
            return true;
        }
    }
    return false;
}

// Time Complexity is
// Space Complexity is

function valueConcat(array, obj) {
    let newArray = array.concat(obj);
    return newArray;
}

// Time Complexity is
// Space Complexity is

function threeInARow(arr) {

}

// Time Complexity is
// Space Complexity is

function variableNameify(words) {

}

// Time Complexity is
// Space Complexity is

function threeIncreasing(arr) {

}

// Time Complexity is
// Space Complexity is

function reverse2D(array) {
    let reversed = [];

    for (let i = 0; i < array.length; i++) {
        reversed.pus(array[i].reverse())
    }
    return reversed;
}

// Time Complexity is
// Space Complexity is

function reverb(word) {

}

// Time Complexity is
// Space Complexity is

function countRepeats(string) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        for (let j = i + 1; j < string.length; j++) {
            let char2 = string[j];
            if (char === char2) {
                count++;
            }
        }
    }
    return count;
}

// Time Complexity is
// Space Complexity is

function pairsToString(arr) {

}

// Time Complexity is
// Space Complexity is

function countAdjacentSums(arr, n) {

}

// Time Complexity is
// Space Complexity is

function signFlipCount(nums) {

}

// Time Complexity is
// Space Complexity is

function powerSequence(base, length) {

}

// Time Complexity is
// Space Complexity is

function collapseString(str) {

}

// Time Complexity is
// Space Complexity is

function oddWordsOut(sentence) {

}

// Time Complexity is
// Space Complexity is

function mindPsAndQs(str) {

}

// Time Complexity is
// Space Complexity is

function commonFactors(num1, num2) {

}

// Time Complexity is
// Space Complexity is

function commonPrimeFactors(num1, num2) {

}

// Time Complexity is
// Space Complexity is

function threeUniqueVowels(string) {
    // const vowels = "aeiouAEIOU";

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char.includes('a' && 'e' && 'ui')) {
            return true;
        }
    }
    return false;
}

// Time Complexity is
// Space Complexity is

function vowelShift(sentence) {

}

// Time Complexity is
// Space Complexity is

function hasSymmetry(array) {

    for (let i = 0; i < array.length; i++) {

        let element = array[i];
        let reversedElement = element.split('').reverse().join('');
        if (element === reversedElement) {
            return true;
        }
    }
    return false;
}


// Time Complexity is
// Space Complexity is

function evenSumArray(array) {

}

// Time Complexity is
// Space Complexity is

function numsToWords(numString) {

}

// Time Complexity is
// Space Complexity is

function moreDotLessDash(str) {

}

// Time Complexity is
// Space Complexity is
