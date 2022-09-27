import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Topfive from "./pages/Topten";
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
        </Routes>
    
    </Router>
    </div>
  );
}

export default App;
