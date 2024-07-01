import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loginHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields are required");
    } else {
      const url = "http://localhost:8000/api";
      try {
        const res = await axios.post(`${url}/login`, {
          email: email,
          password: password,
        });
        if (res.status == 200) {
          toast.success(`${res.data.message}`);
          navigate('/')
        } else if (res.status == 203) {
          toast.error(`${res.data.message}`);
        } else {
          toast.error(`${res.data.message}`);
        }
      } catch (error) {
        toast.error(`Server Error  ---`);
      }
    }
  };
  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5 text-primary">
                    Login
                  </h2>

                  <form onSubmit={loginHandler}>
                    <div className="form-outline mb-4" data-mdb-input-init>
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control form-control-lg"
                        placeholder="Your Email..."
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-4" data-mdb-input-init>
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block btn-lg gradient-custom-4 text-subtle"
                        data-mdb-button-init
                        data-mdb-ripple-init
                      >
                        Login
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Don't have an account?{" "}
                      <Link to={"/register"} className="fw-bold text-body">
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