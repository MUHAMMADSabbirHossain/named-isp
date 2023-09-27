// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from './Components/SignUp/SignUp';
import NavigationBar from './Components/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      {/* navigation bar */}
      <NavigationBar></NavigationBar>


      {/* react route section */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>


      {/* footer section */}
      <Footer></Footer>
    </div>
  );
}

export default App;
