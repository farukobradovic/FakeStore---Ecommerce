import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, user, logout } = useAuth0();

  return (
    <Fragment>
      <header>
        <div className='container'>
          <div className='logo'>
            <h2>
              <span>Fake</span>Store
            </h2>
          </div>
          <div className='links'>
            <Link to='/'>Products</Link>
            <Link to='/cart' style={{ marginRight: "3rem" }}>
              {" "}
              Cart
            </Link>
            <Link to='/checkout'>Checkout</Link>
          </div>
          <div className='profile'>
            <div className='second'>
              {user ? (
                <button
                  className='button-back'
                  style={{ margin: "0" }}
                  onClick={() => {
                    logout({ returnTo: window.location.origin });
                  }}
                >
                  Logout, {user.nickname}{" "}
                  <i className='fas fa-sign-out-alt'></i>
                </button>
              ) : (
                <button
                  onClick={loginWithRedirect}
                  className='button-back'
                  style={{ margin: "0" }}
                >
                  {" "}
                  Login <i className='fas fa-user'></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
