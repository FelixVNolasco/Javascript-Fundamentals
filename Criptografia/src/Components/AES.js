import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import CryptoJS from "crypto-js";

export const AES = () => {
  const secreteKey = "dkwjbefklwbfjwcbidwbfkjwefvfjkwlehb";

  const [formValues, handleInputChange] = useForm({
    AESInput: "",
  });
  const { AESInput } = formValues;

  const [string, setString] = useState("");

  const handleEncryption = () => {
    AESInput !== "" &&
      setString(CryptoJS.AES.encrypt(AESInput, secreteKey).toString());
  };

  const handleDesencryption = () => {
    const bytes = CryptoJS.AES.decrypt(AESInput, secreteKey);
    setString(bytes.toString(CryptoJS.enc.Utf8));
  };

  console.log(formValues);

  return (
    <>
      <div className="container mt-5">
        <h1 className="display-4 mb-5" align="center">
          Encripta y desencripta cualquier texto en AES
        </h1>

        <div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  type="text"
                  name="AESInput"
                  className="form-control"
                  placeholder="Introduce tu texto"
                  value={AESInput}
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
                <p className="h2">El resultado es: {string}</p>
                <p className="h2" id="resultado"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
