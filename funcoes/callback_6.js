const myCustomSortFunction = function (callback) {
  console.log("My Custom Sort Function!");

  const newArray = [...this];

  for (let i = 0; i < newArray.length; i++) {
    console.log(newArray);
    for (let j = 0; j < newArray.length - 1; j++) {
      console.log(
        `Array[${j}]=${newArray[j]} | Array[${j + 1}]=${newArray[j + 1]}`
      );
      if (callback(newArray[j], newArray[j + 1]) > 0) {
        const temp = newArray[j + 1];
        newArray[j + 1] = newArray[j];
        newArray[j] = temp;
      }
    }
  }

  // array is sorted
  return newArray;
};

Array.prototype.sortFromScratch = myCustomSortFunction;

const arr = [3, 2, 1];

console.log(arr.sortFromScratch((current, next) => current - next));
