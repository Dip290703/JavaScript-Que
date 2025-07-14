import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [input, setInput] = useState("");
  const [location, setLocation] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSumbit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  const handleloction = (e) => {
    e.preventDefault();
    setLocation(input);
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
        placeholder="username"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="text"
        placeholder="password"
      />
      <button onClick={handleSumbit}>Sumbit</button>

      <input
        type="text"
        placeholder="location"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleloction}>location</button>
      <h1> location{location}</h1>
    </div>
  );
};

export default Login;
