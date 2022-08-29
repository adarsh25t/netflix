import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Authentication from './pages/Authentication';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='authentication' element={<Authentication/>}/>
        </Routes>
    </div>
  );
}

export default App;
