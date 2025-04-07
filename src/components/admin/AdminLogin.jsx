
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2';


function AdminLogin() {
  let navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogedIn, setLogedIn] = useState(false)

  const [isVisible, setIsVisible] = useState("password");

  const [data, setData] = useState({
    username: "",
    password: ""
})

  function handleSubmit(e) {
    e.preventDefault();

    let loginData = { "name": "Vivek Bhat", "username": data.username, "usertype": "admin" }

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Admin Login Successfully !!"
    });
    // console.log(username, password);

    if (username.toLowerCase() === "admin" && password.toLowerCase() === "admin") {
      localStorage.setItem("data", JSON.stringify(loginData));
      setLogedIn(true);
      navigate("/admin")
    }
    else {
      // alert("Invalid Credential");
      Swal.fire({
        title: "Invalid Credential",
        icon: "warning"
      });
      setUsername("")
      setPassword("")
    }
  };

  useEffect(() => {
    if (localStorage.getItem("data") == null) {
        setLogedIn(true);
        // alert("Hello")
    } else {
        navigate("/admin")
        // setLogedIn(false);
    }
}, [])

  return (
    <>
      {/* <h1>AdminLogin</h1> */}

      <div class="container py-5">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card rounded-4 shadow">
              <div class="card-body p-4 text-center">
                <img style={{ width: "100px" }} src={require('../../assest/images/stylish logo1.png')} alt="" />
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-muted mb-4">Please enter your Username and password!</p>

                {/* <!-- Email Input --> */}
                <div class="form-outline mb-4">
                  <label class="form-label" for="username">Username</label>
                  <input onChange={(e) => setUsername(e.target.value)} type="username" id="username" class="form-control form-control-lg" placeholder="Enter your username" required aria-label="username" />
                </div>

                {/* <!-- Password Input --> */}
                <div class="form-outline mb-4">
                  <label class="form-label" for="password">Password</label>
                  <input onChange={(e) => setPassword(e.target.value)} type={isVisible} id="password" class="form-control form-control-lg" placeholder="Enter your password" required aria-label="Password" />
                </div>

                <div class="form-check mb-3">
                  {/* <input onChange={() => setIsVisible("text")} class="form-check-input" type="checkbox" value="" name="rememberMe" id="rememberMe" />
                  <label class="form-check-label text-secondary" for="rememberMe">
                    Show Password
                  </label> */}

                  <input onChange={(e) => setIsVisible(e.target.checked ? "text" : "password")} class="form-check-input" type="checkbox" value="" name="rememberMe" id="rememberMe" />
                  <label class="form-check-label text-secondary" for="rememberMe">
                    Show Password
                  </label>

                </div>

                {/* <!-- Login Button --> */}
                <div className='d-flex justify-content-center'>
                <button onClick={handleSubmit} class="btn btn-info px-5" type="submit" style={{padding:'10px'}}>Login</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}



// //
// if(type=text)
// {
//   document.id=password
// }
// else if(type=password){
//   document.id.type=text
// }
// //

export default AdminLogin