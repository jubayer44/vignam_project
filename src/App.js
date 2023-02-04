import { createContext, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Pages/Navbar';

export const AuthContext = createContext();
function App() {
  const [ansId, setAnsId] = useState(1);
  const [classes, setClasses] = useState(false);
  const [value, setValue] = useState({});
  return (
    <AuthContext.Provider value={{value, setValue, ansId, setAnsId, classes, setClasses}}>
      <NavBar />
      <Home />
    </AuthContext.Provider>
  );
}

export default App;
