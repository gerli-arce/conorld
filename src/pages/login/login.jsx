import React, { useEffect, useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AppSettings } from "./../../config/app-settings.js";
import { Toast } from "bootstrap";

const initialLoginForm = {
  username: "",
  password: "",
};

function Login() {
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const context = useContext(AppSettings);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    context.setAppHeaderNone(true);
    context.setAppSidebarNone(true);
    context.setAppContentClass("p-0");

    return function cleanUp() {
      context.setAppHeaderNone(false);
      context.setAppSidebarNone(false);
      context.setAppContentClass("");
    };

    // eslint-disable-next-line
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(loginForm);
    if (loginForm.username === "admin" && loginForm.password === "admin") {
      setRedirect(true);
    } else {
      const toast1 = document.getElementById("toast-1");
      const toast = new Toast(toast1);
      toast.show();
    }
  }

  const onInputChange = ({ target: { name, value } }) => {
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  if (redirect) {
    return <Navigate to="/lte/dashboard" />;
  }

  return (
    <>
      {" "}
      <div className="login">
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center">CONORLD</h1>
            <div className="text-inverse text-opacity-50 text-center mb-4">
              Para su protección, verifique su identidad.
            </div>
            <div className="mb-3">
              <label className="form-label">
                Usuario <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control form-control-lg bg-white bg-opacity-5"
                placeholder=""
                name="username"
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <div className="d-flex">
                <label className="form-label">
                  Contraseña <span className="text-danger">*</span>
                </label>
                <a
                  href="#/"
                  className="ms-auto text-inverse text-decoration-none text-opacity-50"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <input
                type="password"
                className="form-control form-control-lg bg-white bg-opacity-5"
                placeholder=""
                name="password"
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="customCheck1"
                />
                <label className="form-check-label" htmlFor="customCheck1">
                  Recordar
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3"
            >
              Ingresar
            </button>
            <div className="text-center text-inverse text-opacity-50">
              ¿Aún no tienes una cuenta?{" "}
              <Link to="/pages/register">Registrarse</Link>.
            </div>
          </form>
        </div>
      </div>
      <div className="toasts-container">
        <div className="toast fade hide" data-autohide="true" id="toast-1">
          <div className="toast-header">
            <i className="far fa-bell text-muted me-2"></i>
            <strong className="me-auto">Bootstrap</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
            ></button>
          </div>
		  <div className="toast-body">
			Usuario o contraseña incorrectos
		  </div>
        </div>
      </div>
    </>
  );
}

export default Login;
