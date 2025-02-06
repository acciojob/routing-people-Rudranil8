
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import UserList from "./UserList";
// import UserDetails from "./UserDetails";
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import UserDetails from './UserDetails';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/user/:id" component={UserDetails} />
    </Router>
  );
};

export default App;
