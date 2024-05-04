import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
  const handleSignIn = async () => {
    try {
      console.log("Username:", username);
      console.log("Password:", password);
  
      
        const response = await axios.post('/api/A_signin', { username, password });
        console.log("Response from server:", response.data);
  
        if (response.data.success) {
          // Sign-in successful
          localStorage.setItem('username', username);         // Store username in session
          localStorage.setItem('userType', "audience")
          window.location.href = '/';                // Redirect to dashboard

        } else {
          setError('Invalid username or password. Please try again.');
          // alert("You don't have an account");
        }

      
    } catch (error) {
      setError('Error in sign-in. Please try again.');
      console.error("Error in sign-in:", error);
    }
  };
  


  return (

    <div  className="container d-flex justify-content-center align-items-center vh-100">
        
        <div style={{ maxWidth: '500px', maxHeight: '700px', width: '100%', overflow: 'auto', }}>
        
        <div className="card p-4">

            <h2 className="text-center mb-4" style={{ color: '#000000' }} >Sign In Page</h2>
            <form>

                <div className="mb-3">

                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="mb-3">

                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <button type="button" className="btn btn-primary" onClick={handleSignIn}>
                  Sign In
                </button>
                <p className="mt-3">
                  Don't have an account? <a href="/A_signup">Sign Up</a>
                </p>

            </form>

        </div>

        </div>

    </div>

  );
};

export default SignIn;
