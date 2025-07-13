console.log("javascript");
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
console.log(typeof null);
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }; 
  inner()
}
outer()