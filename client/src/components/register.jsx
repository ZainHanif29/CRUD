import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Register() {

  const navigate = useNavigate()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();


  const registerHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      toast.error("All fields are required");
    } else if (password !== confirmPassword) {
      toast.error("Password and Confirm Password does not match");
    } else {
      const url = "http://localhost:8000/api";
      try {
        const res = await axios.post(`${url}/register`, {
          fullName: name,
          email: email,
          password: password,
          repeatPassword: confirmPassword,
        });

        if (res.status == 200) {
          toast.success(`${res.data.message}`);
          navigate('/login')
        } else if (res.status == 203) {
          toast.error(`${res.data.message}`);
        } else {
          toast.error(`${res.data.message}`);
        }
      } catch (error) {
        toast.error(`Server Error`);
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
                    Create an account
                  </h2>

                  <form onSubmit={registerHandler}>
                    <div className="form-outline mb-4" data-mdb-input-init>
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        placeholder="Your Name..."
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-4" data-mdb-input-init>
                      <input
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        placeholder="Your Email..."
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-4" data-mdb-input-init>
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        placeholder="Password..."
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-4" data-mdb-input-init>
                      <input
                        type="password"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                        placeholder="Repeat Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block btn-lg gradient-custom-4  text-subtle"
                        data-mdb-button-init
                        data-mdb-ripple-init
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Already have an account?{" "}
                      <Link to={"/login"} className="fw-bold text-body">
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
