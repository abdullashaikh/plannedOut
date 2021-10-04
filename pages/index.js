import Login from "../Component/Login";
import Signup from "../Component/Signup";
export default function Home() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Login />
          {/* <Signup /> */}
        </div>{" "}
      </div>
    </div>
  );
}
