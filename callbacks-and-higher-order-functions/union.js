// ADD CODE HERE
// function union(arrays) {
//   const seen = {};
//   const result = [];
  
//   while (arrays.length) {
//     const arr = arrays.shift();
    
//     for (let i = 0; i < arr.length; i++){
//       if (!(arr[i] in seen)) {
//         result.push(arr[i]);
//         seen[arr[i]] = true;
//       }
//     }
//   }
//   return result;
// }

function union(arrays){
  const result = [];
  
  while(arrays.length){
    const current = arrays.shift();
    current.forEach((el) => {
      if (!(result.includes(el))) result.push(el);
    });
  }
  
  return result;
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]


