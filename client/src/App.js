import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './components/Venath/NavBar';
// import Footer from './components/Venath/Footer'; // Import the NavBar component
// import Signup from './components/Venath/Signup';

// import SignIn from './components/Venath/SignIn';
// import EditPassword from './components/Venath/EditPassword';
// import Home from './components/Venath/Home';





function App() {
  return (
    <Router>
       {/* <style>{'body { background-color: #969696; }'}</style> */}
       {/* Include the NavBar component here */}

      <Routes>

      {/* <Route path="/" element={<Home />} />
      
        <Route path="/Signup" element={<Signup />} />
      
        <Route path="/signin" element={<SignIn />} />
        <Route path="/editpwd" element={<EditPassword />} />
        <Route path="/home" element={<Home />} /> */}

         
</Routes>
      {/* <Footer />{} */}
    </Router>
  );
}

export default App;
