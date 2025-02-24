import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import "./App.css";

function Navbar({ toggleTheme, darkMode }) {
  return (
    <nav className="navbar">
      <h2 className="logo">Expense Tracker</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}

function Home() {
  return (
    <div className="container">
      <div className="card">
        <h2>Track Your Expenses</h2>
        <label>Date:</label>
        <input type="date" />
        <label>Purpose:</label>
        <input type="text" placeholder="Enter purpose" />
        <label>Category:</label>
        <select>
          <option>Select Category</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
        </select>
        <label>Amount:</label>
        <input type="number" placeholder="Enter amount" />
        <label>Type:</label>
        <div className="radio-group">
          <input type="radio" name="type" id="debit" />
          <label htmlFor="debit">Debit</label>
          <input type="radio" name="type" id="credit" />
          <label htmlFor="credit">Credit</label>
        </div>
        <button>Add Expense</button>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
}

function Signup() {
  return (
    <div className="container">
      <div className="card">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button>Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <Router>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
