import React, { useState } from "react";
import rightLogin from "./login-right.png";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    userId: "",
    username: "",
    password: "",
    name: "",
    age: "",
    gender: "",
    profilePhoto: "",
    bio: "",
    interestedIn: "",
    location: "",
    email: "",
    phone: "",
    lookingFor: "",
    education: "",
    profession: "",
    hobbies: [],
    smokes: false,
    drinks: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="login-wrapper w-full h-[100vh] flex bg-gradient-to-r from-red-400 to-white">
      <div className="container  w-[50%] h-[100vh] flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center my-8">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-pink-800 p-[6rem] rounded-full"
        >
          {/* Add form fields here */}
          {/* Example: */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-1 font-semibold text-white"
            >
              Username*
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <label
              htmlFor="username"
              className="block mb-1 font-semibold mt-2 text-white"
            >
              Password*
            </label>
            <input
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {/* Repeat similar pattern for other fields */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          <button
            className=" opacity-[0.7] w-full bg-black text-white py-2 px-4 rounded-full hover:bg-white hover:text-red-800 mt-[4rem]"
          >
            <Link to='/signup'>Signup</Link>
            
          </button>
        </form>
      </div>
      {/* <div
        className="right w-1/2 h-[100vh] bg-no-repeat"
        style={{ backgroundImage: `url(${rightLogin})` }}
      ></div> */}
      <Link
        to="/"
        className="flex ml-[50%] absolute mt-[2rem] text-[1.4rem] text-white"
      >
        {"<"}Back Home
      </Link>
      <img src={rightLogin} alt="" className="w-[52%]" />
    </div>
  );
};

export default Login;
