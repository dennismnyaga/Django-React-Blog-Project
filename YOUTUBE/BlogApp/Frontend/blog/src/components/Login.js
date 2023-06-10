import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../features/authentications/authSlice";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [check, setCheck] = useState(false)

  // const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const handleUsernameInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      await dispatch(login({ username, password }));
      setUsername("");
      setPassword("");
      // setLoading(false);
      navigate("/");
    } catch (error) {
      // setLoading(false);
      if (!error?.originalStatus) {
        setErrMsg(error.response?.data?.detail);
      } else if (error.originalStatus === 400) {
        setErrMsg(error.response?.data?.detail);
      } else if (error.originalStatus === 401) {
        setErrMsg(error.response?.data?.detail);
      } else {
        setErrMsg("Login Failed");
      }
      navigate("/login");
    }
  };

  const togglePasswordVisibility = () => {
    setCheck((prevState) => !prevState);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get("registration") === "successMessage") {
      setErrMsg("Registration successful! You can now log in.");
    }
  }, [location.search]);
  return (
    <div>
      <div className="mx-auto mt-16 shadow-lg w-96 bg-pale-gray rounded-lg">
        <h3 className="text-center uppercase font-extrabold text-xl pt-3">
          Login
        </h3>
        <div>
        {errMsg && 
        <div className="error">
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">  
              {errMsg}!
            </Alert>
          </Stack>  
        </div>
        }
          
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col mx-auto p-5">
          <label>Username*</label>
          <input
            type="text"
            required
            name={username}
            onChange={handleUsernameInput}
            className="pl-1 outline-none py-1"
          />
          <label>password*</label>
          <input
            type={check ? "text" : "password"}
            required
            name={password}
            onChange={handlePwdInput}
            className=" mt-1 pl-1 outline-none py-1"
          />
          <div className="flex content-center gap-3 mb-3">
            <label>show password</label>
            <input type="checkbox" checked={check} onChange={togglePasswordVisibility} />
          </div>
          
          <button className="bg-gradient-to-r from-pink-color to-pale-pink py-3 px-5 rounded-xl text-white font-semibold text-lg shadow-md shadow-pale-pink">
            Login
          </button>
        </form>
        <p className="text-center text-sm pb-3">
          Don't have an account?{" "}
          <Link to="/register" className="underline text-blued">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
