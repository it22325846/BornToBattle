import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//common
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Home from './components/Common/Home';

//#region Venath
import Candidates from './components/venath_reg/Candidates';
import EventCandidates from './components/venath_reg/EventCandidates';
import SubCategoryCandidates from './components/venath_reg/SubCategoryCandidates';
import CreateCandidate from './components/venath_reg/CreateCandidate';
import CreateGroup from './components/venath_reg/CreateGroup';
import EditCandidate from './components/venath_reg/EditCandidate';
import EditJudge from './components/venath_reg/EditJudge';
import CandidateDetails from './components/venath_reg/CandidateDetails';
import AllCandidates from './components/venath_reg/AllCandidates';
import AllGroups from './components/venath_reg/AllGroups';


import Signup from './components/venath_reg/CandidateSignup';
import CandidateSignup from './components/venath_reg/CandidateSignin';
import JudgeSignup from './components/venath_reg/JudgeSignup';
import UserProfile from './components/venath_reg/CandidateUserProfile';
import JUserProfile from './components/venath_reg/JudgeUserProfile';

import SignIn from './components/venath_reg/SignIn';
import EditPassword from './components/venath_reg/EditPassword';
import RegDash from './components/venath_reg/regManager/RegManagerDash';

import JudgeCount from './components/venath_reg/regManager/JudgeCount';
import ManagerEventCandidates from './components/venath_reg/regManager/ManagerEventCandidates';
import ManagerEditAll from './components/venath_reg/regManager/ManagerEditAll';
import EditJudges from './components/venath_reg/regManager/ManagerEditJudges';
import CreateJudge from './components/venath_reg/regManager/CreateJudge';



//admin
import AdminHome from './components/admin/AdminHome';
import AdminSignin from './components/admin/AdminSignIn';
import AdminSignup from './components/admin/AdminSignup';
import AllJudges from './components/venath_reg/AllJudges';
import AddManagers from './components/admin/AddManagers';
// #endregion

import ManagerSignin from './components/managers/ManagerSignin';



//#region Gimhani

import Events from './components/gimhani_event_management/Events';
import CreateEvent from './components/gimhani_event_management/CreateEvent';
import EditEvent from './components/gimhani_event_management/EditEvent';
import EventDetails from './components/gimhani_event_management/EventDetails';
import CreateCategory from './components/gimhani_event_management/CreateCategory';
import EventManagerDashboard from './components/gimhani_event_management/EventManagerDashboard';
import Calendar from './components/gimhani_event_management/Calendar';
import EventCategoryDetails from './components/gimhani_event_management/EventCategoryDetails';
import EditCategory from './components/gimhani_event_management/EditCategory';


// #endregion

//#region Lakruwan
// #endregion

//#region Thamindu

import A_SignIn from './components/Thamindu_AudienceComponents/SignIn';
import A_SignUp from './components/Thamindu_AudienceComponents/Signup';
import A_UserProfile from './components/Thamindu_AudienceComponents/A_UserProfile';
import A_EditUserProfile from './components/Thamindu_AudienceComponents/A_EditUserProfile' ;
import Comment_main from './components/Thamindu_AudienceComponents/Comment_main';

// #endregion
import M_Comment_main from './components/Thamindu_AudienceComponents/AudienceManager/Manager_Comment_main';


//#region Naduni
// #endregion

//#region Nisitha
// #endregion

//#region Dhananji
// #endregion

//#region Vishmitha
// #endregion

// import NavBar from './components/Venath/NavBar';
// import Footer from './components/Venath/Footer'; // Import the NavBar component
// import Signup from './components/Venath/Signup';

//  import Candidates from './components/venath_reg/CandidateSignup';
// import EditPassword from './components/Venath/EditPassword';
// import Home from './components/Venath/Home';





function App() {
  return (
    <Router>
      
       <Header /> 


      <Routes>
        
      <Route path="/" element={<Home />} />
      {/* 
      
        <Route path="/Signup" element={<Signup />} />
      
        <Route path="/signin" element={<SignIn />} />
        <Route path="/editpwd" element={<EditPassword />} />
        <Route path="/" element={<Candidates />} /> */}

        <>{/* Venath registration routes */}
        </>

        <>{/* Gimhani registration routes */}
        </>

        <>{/* Lakruwan registration routes */}
        </>

        <>{/* Thamindu registration routes */}
        </>

        <>{/* Naduni registration routes */}
        </>

        <>{/* Nisitha registration routes */}
        </>

        <>{/* Dhananji registration routes */}
        </>

        <>{/* Vishmitha registration routes */}
        </>

         
</Routes>
      <Footer />{}
    </Router>
  );
}

export default App;

