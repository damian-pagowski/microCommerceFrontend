'use client';

import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    router.push('/products'); // Redirect to the products page after logout
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">MicroCommerce</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/products">Products</a>
            <a className="nav-link" href="/cart"><i className="bi bi-cart"></i> Cart</a>
            {!user && (<a className="nav-link" href="/login">Login</a>)}
            {user && (<a className="nav-link" href="/orders">Orders</a>)}
            {user && (<a className="nav-link" href="" onClick={handleLogout}>Logout</a>)}
            {user && (<a className="nav-link disabled"><i className="bi bi-person-circle"></i> {user.username}</a>)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;