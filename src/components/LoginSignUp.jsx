// Import necessary modules from React and external libraries
import React, { useState } from "react";
import { MdMovie } from "react-icons/md"; // Icon component
import { ToastContainer, toast } from "react-toastify"; // Notification component
import "react-toastify/dist/ReactToastify.css"; // Notification styles

// Functional component for Login/Sign-up form
const LoginSignUp = () => {
  // State variables for managing form fields and errors
  const [isSignUp, setIsSignUp] = useState(true); // Flag for switching between Login and Sign-up
  const [email, setEmail] = useState(""); // Email input field value
  const [password, setPassword] = useState(""); // Password input field value
  const [repeatPassword, setRepeatPassword] = useState(""); // Repeat password input field value (only for sign-up)
  const [errors, setErrors] = useState({}); // Object to store form validation errors

  // Function to toggle between Login and Sign-up forms
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setErrors({}); // Reset errors when toggling form
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const newErrors = {}; // Object to store new validation errors

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Can't be empty";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = "Can't be empty";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    // Repeat password validation (only for signup)
    if (isSignUp && !repeatPassword.trim()) {
      newErrors.repeatPassword = "Can't be empty";
    } else if (isSignUp && repeatPassword !== password) {
      newErrors.repeatPassword = "Passwords do not match";
    }

    setErrors(newErrors); // Update errors state with new validation errors

    // If there are no validation errors, proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      try {
        console.log("Sending data:", { email, password });

        // Perform different actions based on whether it's a Sign-up or Login form submission
        if (isSignUp) {
          // Make POST request to signup endpoint
          const response = await fetch("http://localhost:5000/signup", {
            // Update URL here
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          if (response.ok) {
            toast.success("Account created successfully"); // Show success message
            console.log("User created successfully");
            // Reset state values
            setEmail("");
            setPassword("");
            setRepeatPassword("");
            setIsSignUp(false);
          } else {
            const data = await response.json();
            if (data.message) {
              console.error("Signup failed:", data.message);
            } else {
              console.error("Signup failed:", "Unknown error occurred");
            }
          }
        } else {
          // Make POST request to login endpoint
          const response = await fetch("http://localhost:5000/login", {
            // Update URL here
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          if (response.ok) {
            toast.success("Logged in successfully"); // Show success message
            console.log("Login successful");
            // Reset state values
            setEmail("");
            setPassword("");
            // Handle successful login (e.g., redirect user)
            window.location.href = "/";
          } else {
            const data = await response.json();
            console.error("Login failed:", data.message);
            // Handle login error (e.g., display error message)
            toast.error(data.message);
          }
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle network error or other unexpected issues
      }
    }
  };

  const handleInputFocus = () => {
    setErrors({});
  };

  // JSX for rendering the Login/Sign-up form
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-custom-background ">
      <div className="flex justify-center items-center mb-20 text-red-500 text-5xl">
        <MdMovie />
      </div>

      <div
        className="w-96 bg-custom-gray from-gray-900 to-gray-700 p-8 rounded-2xl bg-custom-gray"
        style={{ width: "450px" }}
      >
        <form onSubmit={handleSubmit} className="bg-custom-gray">
          <h1 className="text-3xl text-white font-light text-left mb-8 bg-custom-gray">
            {isSignUp ? "Sign Up" : "Login"}
          </h1>
          <div
            className={`focus-within:border-white relative w-full h-12 mb-8 border-b border-gray-600 bg-custom-gray transition-all ${
              errors.email ? "border-red-500" : ""
            }`}
          >
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleInputFocus}
              className="w-full h-full bg-transparent border-none outline-none ml-4 caret-red-500 text-white text-lg font-light pr-10 bg-custom-gray"
            />
            {errors.email && (
              <span className="text-red-500 absolute top-8 right-0 text-xs transform -translate-y-full bg-custom-gray">
                {errors.email}
              </span>
            )}
          </div>

          <div
            className={`focus-within:border-white relative w-full h-12 mb-8 border-b border-gray-600 transition-all bg-custom-gray ${
              errors.password ? "border-red-500" : ""
            }`}
          >
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handleInputFocus}
              className="w-full h-full bg-transparent border-none outline-none ml-4 caret-red-500 text-white text-lg font-light pr-10 bg-custom-gray"
            />
            {errors.password && (
              <span className="text-red-500 absolute top-8 right-0 text-xs transform -translate-y-full bg-custom-gray">
                {errors.password}
              </span>
            )}
          </div>

          {isSignUp && (
            <div
              className={`focus-within:border-white relative w-full h-12 mb-8 border-b border-gray-600 bg-custom-gray transition-all ${
                errors.repeatPassword ? "border-red-500" : ""
              }`}
            >
              <input
                type="password"
                placeholder="Repeat Password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                onFocus={handleInputFocus}
                className="w-full h-full bg-transparent border-none outline-none ml-4 caret-red-500 text-white text-lg font-light pr-10"
              />
              {errors.repeatPassword && (
                <span className="text-red-500 absolute top-8 right-0 text-xs transform -translate-y-full bg-custom-gray">
                  {errors.repeatPassword}
                </span>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-red-500 text-white rounded-md py-4 font-light transition-colors hover:bg-white hover:text-black"
          >
            {isSignUp ? "Create an account" : "Login to your account"}
          </button>
          <div className="text-center text-white  mt-3 pb-1 text-md font-light bg-custom-gray">
            <p className="mt-6 bg-custom-gray">
              {isSignUp
                ? "Already have an account? "
                : "Don't have an account? "}
              <a
                onClick={toggleForm}
                className="text-red-500 bg-custom-gray no-underline cursor-pointer"
              >
                {isSignUp ? "Login" : "Sign Up"}
              </a>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer
        className="p-1"
        toastClassName={({ type }) => `
          ${type === "success" ? "bg-custom-gray" : "bg-red-500"}
          text-white
          p-1
          rounded-md
          my-1
          mx-auto
          max-w-xs
        `}
      />
    </div>
  );
};

// Export the LoginSignUp component as default
export default LoginSignUp;
