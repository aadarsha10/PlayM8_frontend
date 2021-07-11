import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap/dist/react-bootstrap.min.js";
import "./App.css";
import Footer from "./Components/Footer";
// import Registration from './Components/Registration';
import Organizer_login from './UI/Organizer_login';

function App() {
  return (
    <div className="App">
      {/* <Registration /> */}
      < Organizer_login/>
      <Footer/>
    </div>
  );
}

export default App;
