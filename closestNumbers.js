const closestNumbers = (arr) => {
  let difference, smallestDif;
  const difAndPairs = [];
  const pairs = [];

  const sortedArr = arr.sort((a,b) => a-b);

  for(let i = 0; i < arr.length; i++){

    for(let j = i + 1; j < arr.length; j++){
      // Find difference between pairs
      difference = sortedArr[j] - sortedArr[i];

      // Find absolute difference
      if(difference < 0){
        difference *= -1;
      }

      // Store the smallest difference between pairs
      if(smallestDif === undefined || smallestDif > difference) {
        smallestDif = difference;
      }

      // Push difference and pairs to the difAndPairs array
      difAndPairs.push([difference, sortedArr[i], sortedArr[j]]);
    };

  };

  // Loop over the difAndPairs and push to pairs only the ones that have the smallest difference
  for(let k = 0; k < difAndPairs.length; k++){
    difAndPairs[k][0] === smallestDif && pairs.push(difAndPairs[k][1], difAndPairs[k][2]);
  }

  // Output all pairs in ascending order
  return pairs;
};

// Tests
console.log(closestNumbers([5, 2, 3, 4, 1]));
console.log(closestNumbers([-20, -3916237, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854]));
console.log(closestNumbers([-20, -3916237, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470]));
console.log(closestNumbers([5, 4, 3, 2]));
