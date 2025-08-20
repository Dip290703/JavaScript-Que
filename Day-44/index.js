const students = [
  { id: 1, name: "Aman", age: 17, grade: "B" },
  { id: 2, name: "Riya", age: 20, grade: "A" },
  { id: 3, name: "Karan", age: 22, grade: "C" },
  { id: 4, name: "Meena", age: 18, grade: "B" },
  { id: 5, name: "Raj", age: 21, grade: "A" },
];
const numbers = [1, 2, 3, 4];

function Counter() {
  const [count, setCount] = React.useState(0);
  const increament = () => {
    setCount((prev) => prev + 1);
  };
  const decreament = () => {
    if (count === 0) {
      alert("done");
    } else {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increament}>add</button>
      <button onClick={decreament}>sub</button>
      <hr />
      {/* map ,filter question */}
      <h1></h1>
      <ul>
        {students.map((student) => {
          return (
            <li>
              <strong>{student.name}</strong> - age={student.age} - grade=
              {student.grade}
            </li>
          );
        })}
      </ul>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number * 2}</li>
        ))}
      </ul>
      <ul>
          {numbers
          .filter((number) => number > 2)
          .map((number) => (
            <li key={number}>{number}</li>
          ))}
      </ul>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Counter));
