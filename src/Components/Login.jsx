
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

  const [name, setName] = useState("");
  

 

  function handleSubmit() {

  }
  return (
    <div>
      Login
      <div>
        <form>
          <label htmlFor="name">Enter Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>

          <Link to={`/booktk/${name}`} onClick={handleSubmit}>
            Submit
          </Link>
          {/* <button onClick={handleSubmit}>submit</button> */}
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
