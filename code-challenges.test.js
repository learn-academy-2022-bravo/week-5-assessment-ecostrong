// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// const secretCodeWord1 = "Lackadaisical"
// // // // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// // // // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"

//Pseudo Code: 
//Create describe function-"codeCracker"
//Create it statement-"Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0"
//Add const provided 
//Add expects provided 
//Add expected output coded message 



describe("codeCracker", () => {
    it("Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
      const secretCodeWord1 = "Lackadaisical"
      // Expected output: "L4ck4d41s1c4l"
      const secretCodeWord2 = "Gobbledygook"
      // Expected output: "G0bbl3dyg00k"
      const secretCodeWord3 = "Eccentric"
      // Expected output: "3cc3ntr1c"
      expect(codeCracker(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codeCracker(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codeCracker(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })


//   FAIL  ./code-challenges.test.js
//   codeCracker
//     ✕ Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0

//   ● codeCracker › Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0

//     ReferenceError: codeCracker is not defined

  

// b) Create the function that makes the test pass.

//use the string.replace 
//replace 'a' to 4,  
//replace 'e' to 3,
//replace 'i' to 1,
//replcae 'o' to 0"

codeCracker = (string) => {
    const newString = string.replace(/a/g,'4').replace(/E/g,'3').replace(/e/g,'3').replace(/i/g,'1').replace(/o/g,'0')
      return newString
  }

console.log(codeCracker(secretCodeWord1));
console.log(codeCracker(secretCodeWord2));
console.log(codeCracker(secretCodeWord3));


// PASS  ./code-challenges.test.js
// codeCracker
//   ✓ Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (1 ms)


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// const letterA = "a"
// // // // Expected output: ["Apple", "Banana", "Orange"]
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]

//pseude code:
//Create describe function-"fruitArray"
//Create it statement-"Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter
//Add const provided 
//Add expects provided 
//Add expected output 

describe("fruitArray", () => {
    it("creates a function that takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
      const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
      const letterA = "a"
      // Expected output: ["Apple", "Banana", "Orange"]
      const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
      const letterE = "e"
      // Expected output: ["Cherry", "Blueberry", "Peach"]
      expect(fruitArray(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(fruitArray(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })
  
// FAIL  ./code-challenges.test.js
// fruitArray
//   ✕ creates a function that takes in an array of words and a single letter and returns all the words that contain that particular letter (1 ms)
// ● fruitArray › creates a function that takes in an array of words and a single letter and returns all the words that contain that particular letter
//   ReferenceError: fruitArray is not defined
// b) Create the function that makes the test pass.
//function must sort through string and return word with certain letter 
//"a" or "e" from the fruit array list. 
//use .filter
//it is not passing 
// 
// fruits = (array, string) => {
//     const lettersorter = array.filter(function(string) {
//     return array
//     }
//   return lettersorter
//   console.log(fruitsArray(arrayOfWords1,letterA));
//   console.log(fruitsArray(arrayOfWords2,letterE));

//2nd attempt 


  const fruitArray = (array,string) => {
     return array.filter(value => value.toLowerCase().includes(string))
  }

//   PASS  ./code-challenges.test.js
//   fruitArray
//     ✓ creates a function that takes in an array of words and a single letter and returns all the words that contain that particular letter (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.153 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.92s.


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// const hand1 = [5, 5, 5, 3, 3]
// // // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // // Expected output: false


//pseude code:
//Create describe function-"fullHouseGame"
//Create it statement-"Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”
//A full house is exactly one pair and one three of any kind. 
//Add const provided 
//Add expects provided 
//Add expected output 
// create a conditonal statment to check if indexes equal each other 
// so if index 0 equals 1, and index 3, equals 4 
// so either true or false 


//  const hand1 = [5, 5, 5, 3, 3]
// // // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // // Expected output: false

describe("fullHouseGame", () => {
  it("Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 4, 3, 3]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    expect(fullHouseGame(hand1)).toEqual(true)
    expect(fullHouseGame(hand2)).toEqual(false)
    expect(fullHouseGame(hand3)).toEqual(false)
  })
})

// // FAIL  ./code-challenges.test.js
// // fullHouseGame
// //   ✕ Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// ● fullHouseGame › Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.
//   ReferenceError: fullHouseGame is not defined

// // psuedo code
// //create a conditonal statment to check if indexes equal each other 
// // so if index 0 equals 1, and index 3, equals 4 
// // so either true or false 


// // b) Create the function that makes the test pass.

const fullHouseGame = (arr) => {
  // console.log(arr)
    if((arr[0] === arr[1])&&(arr[3] === arr[4])) {
        return true
    }else return false
}

//address index [2] use iteration 

// PASS  ./code-challenges.test.js
// fullHouseGame
//   ✓ Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind. (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.165 s
// it is not passing