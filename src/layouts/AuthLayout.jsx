import React from 'react';
import authLogo from "../assets/image 2.png"
import { Link, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      <Link to="/">
        <img className="mt-5" src={authLogo} alt="" />
      </Link>
      <Outlet/>
    </div>
  );
};

export default AuthLayout;