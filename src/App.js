// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Portfolio from './pages/Portfolio';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter basename="/sannidhi-ai-portfolio">
//         <Routes>
//           <Route path="/" element={<Portfolio />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </div>
  );
}
export default App;