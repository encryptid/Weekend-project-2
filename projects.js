console.log('01. Sum')

/* Steps to complete:
1. create a function
2. set parameters of function
3. ???
4. PROFIT.
*/

function sum(first, second) {
    return first + second;
}

let answer = sum(8, 4);

console.log(answer);

//end SUM 

// AVG
console.log('02. Avg')

/*
Write a function named avg that takes 3 parameters and returns the average of those 3 numbers.

Basic steps to complete:
1. Designate 3 numbers
2. Add numbers together
3. Divide numbers by amount of numbers.

Code to complete:
1. Write a function
2. Set 3 parameters inside of the function
3. Count the number of parameters
4. Add parameters
5. Divide sum by number of entries

*/

function avg(first, second, third) {

    return (first + second + third) / avg.length;
}

let result = avg(5, 4, 3);

console.log(result);

// END AVG

// GREATER THAN
console.log('03. Greater Than')
/**
 * Write a function called greaterThan that takes two parameters and returns true if the second parameter is 
 * greater than the first. Otherwise the function should return false.
 * 
 * ELI5 Steps:
 * 1. Create two numbers and corresponding parameters
 * 2. Compare two numbers
 * 3. If the second number is greater than the first (first < second), return true
 * 4. If first number is greater than second (first > second), return false
 * 5. Maybe an if/else statement.
 */

function greaterThan(firstly, secondly) {
    if (firstly > secondly) {
        console.log(false)
    } else {
        console.log(true)
    }
}

greaterThan(9, 6);

// END GREATER THAN

// SECOND LARGEST
console.log('04. Second Largest')
/**
 * Write a function called secondLargest that takes an array and returns the second largest number.
 * Steps:
 * 1. create an array of numbers
 * 2. sort array from least to greatest
 * 3. start at the end of the array
 * 4. go back one. 
 * 
 * OR
 * 
 * 1. create an array of numbers
 * 2. find the largest number in the array via for loop
 * 3. remove largest number from array
 * 4. find the largest number of the remaining array.
 */

/*
ATTEMPT ONE:

 function secondLargest(nums) {
    let largest = 0;

    // let arraySorted = mynums.sort(secondLargest);
    // return (arraySorted.length) - 2;

    for (i = 0; i < nums.length; i++) {
        if (largest < nums) {
            largest = nums[i];
        }

    }
}
let myNums = [1, 4, 8, 9, 2];

secondLargest(myNums);

console.log(secondLargest(myNums)); */

//ATTEMPT TWO - SECOND LARGEST
/*
function secondLargest(numbery) { // if I understand correctly, right now "secondLargest" is calling the array named
// underneath this function
    //let numSort = numbery.Sort(function(a, b){return a-b}); // here I created a variable to represent the result of
    // sorting the array. According to my research, variable.Sort(function(a, b){return a-b}); is supposed to order
    // the list from smallest to largest (though it doesn't seem to be working).
    return (numSort.length) - 1; // here, I'm attempting to take that sorted variable and subtract one integer from
    // it, yielding the second-to-last integer, which should be the second highest. Can't tell if it's working as my
    // code breaks before here.
}

let numTwo = secondLargest([117, 63, 5, 18, 22]); // here, I'm attempting to declare a variable for the function and 
// give it an array. It does not seem to like the array
console.log(numTwo);
*/
// END SECOND LARGEST

//BEGIN CONTAINS VOWEL
/**
 * Write a function called containsVowel that takes a single string and returns true if there is at least one 
 * vowel, or false otherwise.
 *
 * ELI5:
 * 1. Take a sentence
 * 2. Break it down into individual letters (split() function)
 * 3. If any one of the letters is a vowel, return true (for loop, if statement)
 * 4. "Else" return false (else statement)
 * 
 */
console.log("05. Contains Vowel");

function containsVowel(sentence) {
    words = sentence.split("");
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (i = 0; i < words.length; i++) {    
    if (words[i] === vowels[i]){
        return true
    } else {
        return false
    }
}
}

answer = containsVowel("Bad dogs bark.");
console.log(answer);

// BEGIN PIGLATIN
/**
 * Write a function called piglatin that takes a single string and returns the piglatin version of that string.
 * Hint: look into the split() function that you can call on strings.
 * 
 * ELI5:
 * 1. Write a sentence.
 * 2. Break sentence down into individual words (split() function)
 * 3a. Either further break words down into letters and modify so that the last letter appears at the end and add "ay".
 * 3b. OR modify the words so that you can remove the first letter, put it on the back of the word, and add "ay".
 * 4. This sounds hard.
 * 
 * note: possibly we can make a function that applies to every word once it's broken down into an array.
 * i.e. word[i]... etc.
 */
console.log('06. Piglatin');

function pigLatin(sentence) {

}

solution = pigLatin("Free sandwiches for friendly folks!")

//END PIGLATIN

// LONGEST WORD

console.log('07. longestWord')

/**
 * Write a function called longestWord that takes a single string and returns the longest word in the string.
 * hint: lookin into the split() function that you can call on a string
 */

function longestWord(sentence) {
    // 1. Convert sentence into an array
    // 2. Search through the words for the largest letter count.
    // 3. Once we've checked them all, return the longest one
    let words = sentence.split(' '); // now 'words' is an array of strings
    let longest = 0; // the length of the longest one so far
    let keeper = null;         //the longest word itself

    for (i = 0; i < words.length; i++) {
        if (words[i].length > longest) {    // if this word is longer than the longest so far...
            longest = words[i].length;      // we have a new longest word
            keeper = words[i];
            console.log('found a new longest word: ' + keeper);
        }
        
    }
    
    //return a string
    return keeper;
}

let winner = longestWord('how much wood would a woodchuck chuck?');
console.log("The longest word is: " + winner + "!");

// END LONGEST WORD

// BEGIN DIVISORS
/**
 * Write a function called divisors that accepts a number and returns an array of all of the numbers that divide
 * evenly into it.
 * 
 * ELI5:
 * 1. Take a number
 * 2. Find or devise a formula that finds all of the numbers that divide evenly into the number
 * 3. ???
 * 4. Profit
 */
console.log('08. Divisors');

// END DIVISORS

// BEGIN WEAVE
/**
 * Write a function called weave() that accepts an input string and number. The function should return the string
 * with every xth character replaced with an 'x'.
 * 
 * ELI5:
 * 1. Create a function with two parameters; a string and a number
 * 2. Set function to look at the string and count as many times as "number"
 * 3. When "number" is reached, replace the letter in "string" with an "x"
 * 4. ...Profit?
 */
console.log('09. Weave');

// END WEAVE

// *BEGIN BONUS
/**
 * Jeb eats out at restaurants all the time but is horrible at math. He decides to write a function called bonus()
 * that accepts a single parameter (the cost of the meal), and should return the tip Jeb should give his waiter. 
 * Jeb uses two rules to calculate tips:
 * 
 * First he always tips 20% on the original bill.
 * He then rounds up to the nearest dollar. For example, if the total with tip is $22.78, he'd round up to $23.00.
 * 
 * ELI5:
 * 1. Take the cost of a meal
 * 2. Add 1.2% (ticket * 1.2)
 * 3. Round up to the nearest dollar (Math.ceil())
 */
console.log('10. Bonus');

//END BONUS

// BEGIN POKEMON
/**
 * Write a function called pokemon that accepts an array of numbers. Each element in the array represents a day, 
 * and the number represents the number of Pokemon caught on that day. Return an array of the same length that
 * contains the number of total Pokemon caught up to that day.
 * 
 * For example,
 * 
 *      pokemon([1, 2, 5, 1, 3]); // returns [1, 3, 8, 9, 12]
 * 
 * ELI5:
 * 1. Create a function with a parameter. The parameter will be an array.
 * 2. Create an array.
 * 3. Make the function add the each preceding day to the next and print it to a new array.
 */
console.log('11. Pokemon');