import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from './components/pages/home/Home';
import SignUp from "./components/pages/signup/SignUp";
import Login from "./components/pages/login/Login";
import Order from "./components/pages/order/Order";
import CheckIfLoggedIn from "./components/pages/checkIfLoggedIn/CheckIfLoggedIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={< Home/>}/>
          <Route path="/signup" element={< SignUp/>}/>
          <Route path="/login" element={< Login/>}/>
          <Route path="/order" element={< Order/>}/>
          <Route path="/checkIfLoggedIn" element={< CheckIfLoggedIn/>}/>
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
