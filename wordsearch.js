const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  // console.log("horizontalJoin:", horizontalJoin)
  let line;
  for (line of horizontalJoin) {
    if (line.includes(word)) return true;

  }

  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  //console.log("verticalJoin:", verticalJoin);
  let row;
  for (row of verticalJoin) {
    if (row.includes(word)) return true;
  }
  // base case is false
  return false;
};

const transpose = function(matrix) {

  const array = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // This is a conditional statement that checks if the array at index col is empty. If it is, it assigns an empty array to that index.
      if (!array[col]) {
        array[col] = [];
      }
      array[col].push(matrix[row][col]);
    }
  }
  return array;
};


module.exports = wordSearch;

