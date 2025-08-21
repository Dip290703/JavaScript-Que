// Condition operator
function App() {
    let result = true
  return (
    <>
      <h1>Conditional Operator</h1>
     {
        result ?  <Conditional /> : <></>
     }
     <LogivalAnd />
     <LogicalOr />
     <OptionalChaning />
     <NullishCoalescing />
    </>
  );
}

function Conditional() {
  let x = 7;
  let y = 10;

  return (
    <div>
        {
            (x > 0 && y > 0) 
      ? <span>Both are greater than 0</span> 
      : <></>
  
        }
    </div>
  )
}
const LogivalAnd = () => {
    let a = 10
    let b =20
    if(a > 0 && b > 0){
        return <span>Both a and b greate than 0</span>
    }else{
        <></>
    }

}
const LogicalOr = () => {
    let israining = true
    let isSunny = false
    if(israining || isSunny){
        return <h1>weather is reainy or sunny</h1>
    }else{
        <></>
    }
}

const OptionalChaning = () =>{
    let user = {
        name:"John",
        // address:{
        //     city:"London",
        //     zipcode:441108
        // }
    }
    return <p>
        {
        user?.address?.city
        }
    </p>
}
const NullishCoalescing = () => {
      let user = {
        name:"John",
        // address:{
        // city:"London",
        //     zipcode:441108
        // }
      }
    return <p>
        {
        user?.address?.city ?? "city not available"
        }
    </p>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
