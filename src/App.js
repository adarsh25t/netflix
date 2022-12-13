import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Authentication from './pages/Authentication';
import { Box } from '@mui/material';
import Profiles from './pages/Profiles';


function App() {
  return (
    <Box className="App">
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='authentication' element={<Authentication/>}/>
          <Route path='/profiles' element={<Profiles/>}/>
        </Routes>
    </Box>
  );
}

export default App;
