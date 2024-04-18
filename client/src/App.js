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
import DisplayEvents from './components/gimhani_event_management/DisplayEvents';
import Schedule from './components/gimhani_event_management/Schedule';
// #endregion

//#region Lakruwan
import FinalScore from './components/Score/FinalScore';
import AddScore from './components/Score/AddScore';
import UpdateScore from './components/Score/UpdateScore';
import CandidateAddScore from './components/Score/CandidateAddScore';
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
import StallReg from './components/Stall/stall_holder/stallerRegister';
import StallerProfile from './components/Stall/stall_holder/stallerProfile';
import StallerEdit from './components/Stall/stall_holder/stallerEdit';
import TheStall from './components/Stall/stall_item/theStall';
import ItemEdit from './components/Stall/stall_item/editItems';
import UserStalls from './components/Stall/stall_item/stallPage';

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
        <Route path="/" element={<Home />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/candidates/:event" element={<EventCandidates />} />
        <Route path="/subcandidates/:event" element={<SubCategoryCandidates />} />
        <Route path="/addc" element={<CreateCandidate />} /> {/* add */}
        <Route path="/creategroup" element={<CreateGroup/>} />
        <Route path="/editc/:id" element={<EditCandidate />} /> {/* edit */}
        <Route path="/jedit/:id" element={<EditJudge/>} />
        <Route path="/candidate/:id" element={<CandidateDetails />} />
        <Route path="/all_candidates" element={<AllCandidates />} />
        <Route path="/all_groups" element={<AllGroups/>} />
        <Route path="/all_judges" element={<AllJudges />} /> {/* judges */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/CandidateSignup" element={<CandidateSignup />} />
        <Route path="/JudgeSignup" element={<JudgeSignup />} />

        
        <Route path="/regDash" element={<RegDash />} />
        <Route path="/judgeCount" element={<JudgeCount />} />
        <Route path="/managercandidates/:event" element={<ManagerEventCandidates />} />
        <Route path="/editcandidates" element={<ManagerEditAll />} />
        <Route path="/editJudges" element={<EditJudges />} />
        <Route path="/addJudge" element={<CreateJudge />} />


        <Route path="/profile" element={<UserProfile />} />
        <Route path="/judgeprofile" element={<JUserProfile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/editpwd" element={<EditPassword />} />
      

        <Route path="/admin" element={<AdminHome />} />
        <Route path="/adminsignin" element={<AdminSignin />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
        <Route path="/addManagers" element={<AddManagers />} />
        <Route path="/user/:userName/:id" component={UserProfile} />

        <Route path="/managerSignin" element={<ManagerSignin />} />

        </>

        <>{/* Gimhani registration routes */}
        <Route path="/e" element={<Events />} />
        <Route path="/addevent" element={<CreateEvent />} />
        <Route path="/editevent/:id" element={<EditEvent />} />
      <Route path="/schedule" element={<Schedule />} />
      
        {/* <Route path="/edit/:id" render={(props) => <EditPost {...props} />} /> */}
       
        <Route path="/addcat" element={<CreateCategory />} />
        <Route path="/edit/cat/:id" element={<EditCategory />} />

        <Route path="/eventmanager" element={<EventManagerDashboard />} />
        <Route path="/calendar" element={<Calendar />} />

        <Route path="/displayevents" element={<DisplayEvents />} />

       

        <Route path="/eventd/:id" element={<EventDetails />} />
        <Route path="/cat/:id" element={<EventCategoryDetails />} />
        </>

        <>{/* Lakruwan registration routes */}
        <Route path='/finalscoresheet' Component={FinalScore}/>
      <Route path='/addscore' Component={AddScore}/>
      <Route path='/updatescore' Component={UpdateScore}/>
      <Route path='/candidateaddscore' Component={CandidateAddScore}/>
        </>

        <>{/* Thamindu registration routes */}
        <Route path="/A_signup" element={<A_SignUp />} />
        <Route path="/A_signin" element={<A_SignIn />} />
        <Route path="/A_profile" element={<A_UserProfile />} />
        <Route path="/edit/:username" element={<A_EditUserProfile />} />
        <Route path="/M_Comment_main" element={<M_Comment_main />} />
        <Route path="/contactus" element={<Comment_main />} />
        </>

        <>{/* Naduni registration routes */}
        </>

        <>{/* Nisitha registration routes */}
        <Route path="/createStaller" element={<StallReg />} />
        <Route path="/stallerprofile" element={<StallerProfile />} />
        <Route path="/editStaller/:Stallerid" element={<StallerEdit />} />

        
        <Route path="/theStall" element={<TheStall />} />
        <Route path="/editItems/:Itemid" element={<ItemEdit />} />
        <Route path="/stalls" element={<UserStalls />} />
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

