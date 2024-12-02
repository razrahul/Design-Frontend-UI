import React, {lazy} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));


function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<h2>Welcome To About Page</h2>} />
       <Route path="/contact" element={<h2>Welcome To Contact Page</h2>} />
     </Routes>
   </Router>
  )
}

export default App;
