import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
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
                  <h2 className="text-uppercase text-center mb-5 text-primary">Create an account</h2>

                  <form>
                    <div className="form-outline mb-4" data-mdb-input-init>
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        placeholder='Your Name...'
                      />
                      {/* <label className="form-label" htmlFor="form3Example1cg">
                        Your Name
                      </label> */}
                    </div>

                    <div className="form-outline mb-4" data-mdb-input-init>
                      <input
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        placeholder='Your Email...'
                      />
                      {/* <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label> */}
                    </div>

                    <div className="form-outline mb-4" data-mdb-input-init>
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        placeholder='Password...'
                      />
                      {/* <label className="form-label" htmlFor="form3Example4cg">
                        Password
                      </label> */}
                    </div>

                    <div className="form-outline mb-4" data-mdb-input-init>
                      <input
                        type="password"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                        placeholder='Repeat Password'
                      />
                      {/* <label className="form-label" htmlFor="form3Example4cdg">
                        Repeat your password
                      </label> */}
                    </div>

                   

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-primary btn-block btn-lg gradient-custom-4  text-subtle"
                        data-mdb-button-init
                        data-mdb-ripple-init
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Already have an account?{' '}
                      <Link to={'/login'} className="fw-bold text-body">
                        <u>Login here</u>
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

export default Register;
