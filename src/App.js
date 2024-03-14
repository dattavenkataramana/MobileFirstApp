import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import DisplayItems from './components/DisplayItems';
import SignUpForm from './components/Signup';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/displayitems" element={<DisplayItems />} />
        <Route path="/signup" element={<SignUpForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
