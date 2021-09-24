function recursiveSearch(arr, target) {
  // type your code here
  if (arr.length === 0) return false
  const first = arr.shift()
  if (first === target) return true
  return recursiveSearch(arr, target)

}

// pseudocode
// return if there's nothing left in array (return what?)

// grab first value and remove from array
// if it's equal to target, return true
// else, make recursive call and pass in target and modified array


// Rewrite the problem in your own words
// given an array and a target integer, return "true"
// if the array includes the integer
// else, return false


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([1, 5, 6], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", recursiveSearch([3, 2, 2], 2));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
