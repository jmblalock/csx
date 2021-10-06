// ADD CODE HERE
function cycleIterator(arr) {
  var counter = -1;
  function f() {
    counter++;
    return arr[counter];
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
