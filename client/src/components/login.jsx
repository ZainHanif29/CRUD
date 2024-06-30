import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5 text-primary">Login</h2>

                  <form>
                    <div className="form-outline mb-4" data-mdb-input-init>
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control form-control-lg"
                        placeholder='Your Email...'
                      />
                      {/* <label className="form-label" htmlFor="form3Example3">
                        Your Email
                      </label> */}
                    </div>

                    <div className="form-outline mb-4" data-mdb-input-init>
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control form-control-lg"
                        placeholder='Password'
                      />
                      {/* <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label> */}
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-primary btn-block btn-lg gradient-custom-4 text-subtle"
                        data-mdb-button-init
                        data-mdb-ripple-init
                      >
                        Login
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Don't have an account?{' '}
                      <Link to={'/register'}  className="fw-bold text-body">
                        <u>Register here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
