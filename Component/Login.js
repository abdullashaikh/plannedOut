import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { API_URL } from "../Constants/App/AppConstants";
import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = () => {
    const body = {
      email: email,
      password: password,
    };
    const url = API_URL + "login/user/";
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: body,
    })
      .then((response) => response.json())
      .then(async (responseJson) => {
        console.log(responseJson);
        alert(JSON.stringify(responseJson));
      });
  };
  return (
    <div className="row">
      <div className="col-lg-4 m-auto">
        <div className="card mt-5 bg-light">
          <div className="card-title text-center">
            <img src="d.jpg" width="150px" height="150px" />
          </div>
          <div className="card-body">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <EmailIcon />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control py-1.9"
                  placeholder="Email....."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <LockIcon />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control py-1.9"
                  placeholder="Password....."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="float-right mt-2">
                <input type="checkbox" /> Remember Me
              </p>
              <button className="btn btn-success" onClick={handelSubmit}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
