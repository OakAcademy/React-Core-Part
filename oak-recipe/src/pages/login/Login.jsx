import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1);
    localStorage.setItem("user", JSON.stringify(user));
    setUser("");
    setEmail("");
  };

  return (
    <div className="loginWrapper">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
