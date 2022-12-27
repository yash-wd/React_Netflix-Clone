import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logoLogin from "../../resource/netflix.png";
import Translation from "../../Components/translate/Translation";

const Login = () => {
  return (
    <div className="login">
      <div className="bg-wrapper">
        <div className="logo-login">
          <Link to="/"><img src={logoLogin} alt="" /></Link>
        </div>
        <div className="form-wrapper">
          <div className="form-content-wrapper">
            <h1>Sign In</h1>

            <form action="" className="form">
              <input type="email" placeholder="Email or phone number" />
              <br />
              <input type="password" placeholder="password" />
              <br />
              <button className="sign-in-btn">Sign In</button>
            </form>
            <div className="form-under-text">
              <div>
                <input type="checkbox" value="true" name="" id="" />
                <label>Remember me</label>
              </div>
              <a href="/#">Need help?</a>
            </div>
          </div>

          <div className="form-footer">
            <p className="para">
              New to Netflix? <span>Sign up now.</span>
            </p>
            <p className="captcha">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="/#">Learn more.</a>
            </p>
          </div>
        </div>

        <div className="login-footer">

          <div className="login-footer-container">
          <p className="login-call_num">
            Questions? Call <a className="login-number" href="tel:000-800-040-1843">
              000-800-040-1843
            </a>
          </p>

          <div className="login-footer-elements">
            <div className="login-footer-list">
              <p>FAQ</p>
              <p>Cookie Preferences</p>
              <Translation/>
            </div>
            <div className="login-footer-list">
              <p>Help Centre</p>
              <p>Corporate Information</p>
            </div>
            <div className="login-footer-list">
              <p>Terms of Use</p>
            </div>
            <div className="login-footer-list">
              <p>Privacy</p>
            </div>
          </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
