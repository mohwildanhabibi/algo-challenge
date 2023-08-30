function PermutationStep(num) {
  const numString = num.toString(); 
  if (num.length < 2) {
    return -1
  }

  const numArray = [];

  for (let i=0; i < numString.length; i++) {
    numArray.push(numString.charAt(i));
  }

  var permutedArray = Permutation(numArray);
  var numArrayInNumber = permutedArray.map(array => (array.join(''))).sort();

  var biggerNumber = numArrayInNumber.find(x => x > numString);

  return biggerNumber; 

}

function Permutation(numArray) {
  if (numArray.length == 0) return [];
  else if (numArray.length == 1) return [numArray];

  var finalArray = [];

  for (let i=0; i < numArray.length; i++) {
    const current = numArray[i];
    const remainNumArray = numArray.slice(0, i).concat(numArray.slice(i+1))
    const permutedRemainNumArray = Permutation(remainNumArray);

    for (let k=0; k < permutedRemainNumArray.length; k++) {
      finalArray.push([current].concat(permutedRemainNumArray[k]));
    }
  }

  return finalArray;
}
   
// keep this function call here 
PermutationStep(readline());