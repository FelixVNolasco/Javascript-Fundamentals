import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export const Base64Component = () => {
  const [formValues, handleInputChange] = useForm({
    BaseInput: "",
  });

  const { BaseInput } = formValues;

  console.log(formValues);

  const [string, setString] = useState("");

  const handleEncryption = () => {
    BaseInput !== "" && setString(btoa(BaseInput));
  };

  const handleDesencryption = () => {
    setString(atob(BaseInput));
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="display-4 mb-5" align="center">
          Encripta y desencripta cualquier texto en BASE64
        </h1>

        <div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  type="text"
                  name="BaseInput"
                  className="form-control"
                  placeholder="Introduce una cadena de texto"
                  value={BaseInput}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group d-flex justify-content-between align-items-center">
                <button
                  style={{ width: 225 }}
                  type="submit"
                  onClick={handleEncryption}
                  className="btn btn-primary btn-lg  "
                >
                  Encriptar
                </button>
                <button
                  style={{ width: 225 }}
                  type="submit"
                  onClick={handleDesencryption}
                  className="btn btn-secondary btn-lg "
                >
                  Desencriptar
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <p className="h2">El resultado es: {string} </p>
                <p className="h2" id="resultado"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
