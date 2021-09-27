// ADD CODE HERE
function intersection(arrays) {
  let acc = arrays.pop();

  while (arrays.length) {
    const current = arrays.pop();
    const storage = [];

    current.forEach((element) => {
      if (acc.includes(element)) storage.push(element);
    });

    acc = storage;
  }
  return acc;
}

// function intersection(arrays){
//   return arrays.reduce((a, b) =>
//     a.filter(el => b.includes(el)))
// }

// function intersection(arrays){
//   return arrays.reduce((a, b) => {
// 		const filtered = [];
//     b.forEach(el => {
// 			if (a.includes(el)) filtered.push(el);
//     })
//     return filtered;
//   });
// }

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
