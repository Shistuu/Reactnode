import React, { useState } from "react";
import "./SignupForm.css";
import { registerUser } from "../../services/user";
import { useNavigate } from "react-router-dom";

const SignupForm: React.FC = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const userData = { username, email, address, phone, gender, password }; //
    await registerUser(userData); // Obtain the AxiosResponse object
    navigate("/login", { replace: true });
  };
  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <input
        className="signup-input"
        type="text"
        placeholder="Name"
        value={username}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="signup-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="signup-input"
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        className="signup-input"
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="signup-input"
        type="text"
        placeholder="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <input
        className="signup-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="signup-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
