import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Home from './components/Home';
import LoginSignup from './components/LoginSignup'; 
import Forgetpass from './components/Forgetpass';
import ResetCode from './components/ResetCode';
import EditProf from './components/EditProf';



// const App = () => {
//   return (
//     <Home />
//   );
// };

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/forgetpass" element={<Forgetpass />} />
        <Route path="/ResetCode" element={<ResetCode />} />
        <Route path="/EditProf" element={<EditProf />} />

      </Routes>
    </Router>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import LoginSignup from './components/LoginSignup';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<LoginSignup />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
