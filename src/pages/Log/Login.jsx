import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="signin mt-5">
    <form className="in-form" action="" >
        <h1 className="in-title">Login</h1>
        <div className="in-input">
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button>Login to your Account</button>
        </div>

        <div className="dont">
            <p className="mb-0">Don't have an account?</p>
            <Link to="/register">Register</Link>
        </div>
    </form>
</div>
  )
}

export default Login