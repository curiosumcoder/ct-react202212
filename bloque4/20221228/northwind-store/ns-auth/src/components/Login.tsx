import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './Login.css';

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <main className="form-signin w-100 m-auto">
        <form>
          <i
            className="bi bi-lightbulb-fill"
            style={{ color: 'darkgray', fontSize: '10em' }}
          ></i>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
              minLength={7}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
              minLength={8}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={(event) => {
              event.preventDefault();

              // Backend Auth
              sessionStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2lsYmVydG8iLCJlbWFpbCI6ImdiZXJtdWRlQG91dGxvb2suY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.p5BPpQ8BaS_AqzUqwSUUwvO0kk4uBXNDEY2jlUuKrPo')
              
              //navigate('/');
              window.location.href = "/"
            }}
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2022</p>
        </form>
      </main>
    </>
  );
}

export default Login;
