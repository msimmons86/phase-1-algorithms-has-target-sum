function hasTargetSum(array, target) {
  const numObj = {}
  for (i = 0; i < nums.length; i++){
      let diff = target - nums[i]
      if(diff in numObj){
          return [i, numObj[diff]]
      } else {
          numObj[nums[i]] = i
      }
  }
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Add the total of an 'array', with the 'target' integer

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
