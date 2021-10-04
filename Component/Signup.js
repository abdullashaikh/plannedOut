import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handelSubmit = () => {
    alert(password);
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
                    <PersonIcon />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control py-1.9"
                  placeholder="Username....."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
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
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
