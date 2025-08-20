const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
 function max () {
    let maximum = numbers[0]
    for (let i = 0 ; i < numbers.length ; i ++){
   if(numbers[i] > maximum)
   {
     maximum = numbers[i]
   }
    }
    console.log(maximum);
    
 }
 max()
  return (
    <div>
      <h1>Map, Fiter, Reduce </h1>
      <p> numbers = [{numbers.join(", ")}]</p>

      <h3>square of each numbers</h3>
      <ul>
        {numbers.map((num) => (
          <li>{num * num}</li>
        ))}
      </ul>

      <h3>Even Number</h3>
      <ul>
        {evenNumbers.map((num) => {
          return <li>{num}</li>;
        })}
      </ul>
      <h3>sum</h3>
      <p>
        Sum : {numbers.reduce((acc,number)=> acc + number , 0 )}
      </p>
      <h3>max</h3>
      <p>Max : {numbers.reduce((max,num) => num > max ? num : max , numbers[0])}</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
