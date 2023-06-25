import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUserService } from "../../services/user";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    const userData = { email, password }; //
    const response = await loginUserService(userData); // Obtain the AxiosResponse object
    const data = response.data.token; // Access the data property of the response
    localStorage.setItem("authentication_token", data); //
    navigate("/product", { replace: true });
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
      <Link to="signup">
        <button>Sign Up </button>
      </Link>
      <Link to="add-product">
        <button>Add Product </button>
      </Link>
    </form>
  );
};
export default LoginForm;
