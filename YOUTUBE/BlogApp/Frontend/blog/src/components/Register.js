import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Register = () => {
  const navigate = useNavigate();
    const apiUrl = 'http://127.0.0.1:8000'
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);

  const handleUsernameInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  const handleConfirmPwdInput = (e) => setConfirmPassword(e.target.value);


  const togglePasswordVisibility = (() => {
    setCheck((prevState) => !prevState)
  })

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
     await axios.post(`${apiUrl}/register/`, {
        username: username,
        password: password,
      });

      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setError("");
      navigate('/login', { state: { successMessage: "Registration successful. Please log in." } })
    } catch (error) {
      setError(error.response.data.username[0]);
    }
  };


  return (
    <div>
      <div className="mx-auto mt-16 shadow-lg w-96 bg-pale-gray rounded-lg">
        <h3 className="text-center uppercase font-extrabold text-xl pt-3">
          Register
        </h3>
        <div>
        {error && 
        <div className="error">
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">  
              {error}
            </Alert>
          </Stack>  
        </div>
        }
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col mx-auto p-5">
          <label>Username*</label>
          <input type="text" required
          name={username}
          onChange = {handleUsernameInput}
           className="pl-1 outline-none py-1" />
          <label>password*</label>
          <input
            type={check ? 'text' : 'password'}
            required
            name={password}
            onChange = {handlePwdInput}
            className="mt-1 pl-1 outline-none py-1"
          />
          <label>Confirm password*</label>
          <input
            type={check ? 'text' : 'password'}
            required
            name={password}
            onChange = {handleConfirmPwdInput}
            className="mb-8 mt-1 pl-1 outline-none py-1"
          />
          <div className="flex gap-3 mb-3">
            <label>show password</label>
            <input type="checkbox" checked={check} onChange={togglePasswordVisibility} />
          </div>
          <button className="bg-gradient-to-r from-pink-color to-pale-pink py-3 px-5 rounded-xl text-white font-semibold text-lg shadow-md shadow-pale-pink">
            Register
          </button>
        </form>
        <p className="text-center text-sm pb-3">
          Already have an account?{" "}
          <Link to="/login" className="underline text-blued">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
