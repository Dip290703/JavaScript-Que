function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count+1);
  };
//   return React.createElement(
//     "div",
//     null,
//     React.createElement("p", null, `Count : ${count}`),
//     React.createElement("button", { onClick: increment }, "Increment")
//   );
return(
    <div>
        <p>count : {count}</p>
        <button onClick={increment}>Increment</button>
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Counter));
//simple vaiable wont allow to re render the page
//babel is translator  that convert jsx into react dom


// ---------------------------------------------------------------\\

