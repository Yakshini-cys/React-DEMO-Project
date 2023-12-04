import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';


export default function App() {

  const [user, setUser] = useState({ email: '', password: '' });
  const [isValidEmail, setIsValidEmail] = useState(true);
  const navigate = useNavigate();
  
const APIKEY="https://65643735ceac41c0761da128.mockapi.io/ap1/v1/reg";


//   useEffect(() => {
//     axios.get(APIKEY)
//       .then(response => {
//         setRegistrationData(response.data);

//         // Optional: Log the fetched registration data
//         console.log('Registration Data:', response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching registration data:', error);
//       });
//   }, []);

  const updateemail = (e) => {
    setUser({ ...user, email: e.target.value });
    setIsValidEmail(validateEmail(e.target.value));
  };

  const updatepassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };

//   const handleSubmit = () => {
//     setLoginAttempted(true);

//     if (!isValidEmail) {
//       alert('Invalid email address.');
//       return;
//     }

//     // Check for matching user after data has been fetched
//     const matchingUser = registrationData.find(regUser => regUser.email === user.email && regUser.password === user.password);

//     console.log('Matching User:', matchingUser);

//     if (matchingUser) {
//       handlemeow();
//       alert('Login successful!');
//       // Proceed with your login logic here or redirect to the next page
//       // history.push('/Firstpage');
//     } else {
//       alert('Invalid email or password.');
//     }
//   };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkUser = async (email , password) => {
     const response = await axios.get(APIKEY);

     console.log(response);

     return response.data.some(
       (user) => user.EmailAddress === email && user.Password === password
     )

  }

  const handleLogin = async () => {
      const userExist = await checkUser(user.email , user.password);

      if(userExist)
      {
         navigate('/Home');
      }

      else
      {
         alert("user does not exits")
      }
  }

  return (
    <>
    <body id="Log">
    <div className="wrapper">
    <form action=''>
    <h1>SIGN IN</h1>
    <div class='input-box'>
    <input
            type="text"
            placeholder="Username"
            value={user.email}
            onChange={updateemail}
            className="email"
            />
            <i class='bx bxs-user'></i>
            </div>
            <div class='input-box'>
            <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={updatepassword}
            className="email"
            />
            <i class='bx bxs-lock-alt'></i>
            </div>
            <div class='remember-forgot'>
            <label><input type="checkbox"/>Remember me</label>
            <a href='#'>Forgot password?</a>
            </div>
            <Link to="/">
            <button
            type='submit'
            class='btn'
            onClick={handleLogin}
            > Login</button>
            </Link>
            {!isValidEmail && (
              <p style={{ color: 'red' }}>Invalid email or password.</p>
              )}
              <div class='register-link'>
              <p>Don't have an account? 
              <Link to="/Signup">
              <p>Sign Up</p>
              </Link>
              </p>
              </div>
              </form>
              
              </div>
              </body>
              </>
  );
}