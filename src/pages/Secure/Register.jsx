import React from 'react';
import "./Register.css";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="signup mt-5">
        <form className="up-form" action="" >
            <h1 className="up-title">Register</h1>
            <div className="up-input">
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Repeat Password" />
                <button>Create an Account</button>
            </div>

            <div className="already">
                <p className="mb-0">Already have an account?</p>
                <Link to="/login">Login</Link>
            </div>
        </form>
    </div>
  );
};

export default Register;