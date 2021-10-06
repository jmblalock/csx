// ADD CODE HERE
function cycleIterator(arr) {
  var i = 0;

  function f() {
    i++;
    if (i <= arr.length) return arr[i - 1];
    else {
      i = 0;
      i++;
      return arr[i - 1];
    }
  }

  return f;
}
// Uncomment these to check your work!
const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
