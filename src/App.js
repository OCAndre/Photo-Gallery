import "./App.css";
import { useHistory } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Topfive from "./pages/Topten";
import Account from "./pages/Account";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/Topfive" element={<Topfive/>} />
          <Route exact path="/Account" element={<Account/>} />
          <Route exact path="/show" element={<show/>} />
        </Routes>
    
    </Router>
    </div>
  );
}

export default App;
