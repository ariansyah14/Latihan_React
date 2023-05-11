import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { Route, Routes } from 'react-router-dom';
import User from './pages/User';
import ListUser from './pages/ListUser';
import RegisterUser from './pages/RegisterUser';

function App() {
  const color = ['white', 'green', 'blue', 'red'];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = color[colorIndex];
  }, [colorIndex])

    const handleChangeColorBlue = () => {
        setColorIndex(2);
    };
    const handleChangeColorRed = () => {
      setColorIndex(3);
  };
    const handleChangeColorGreen = () => {
      setColorIndex(1);
  };
    const handleChangeColorWhite = () => {
      setColorIndex(0);
  };

  return (
    <>
    <br/>
    <Button style={{backgroundColor:"red"}} onClick={handleChangeColorRed}>Merah</Button>
    <Button style={{backgroundColor:"green"}} onClick={handleChangeColorGreen}>Hijau</Button>
    <Button style={{backgroundColor:"blue"}} onClick={handleChangeColorBlue}>Biru</Button>
    <Button style={{backgroundColor:"white"}} onClick={handleChangeColorWhite}>Putih</Button>

    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/user/:id" element={<ListUser />} />
      {/* <Route path="/register" element={<RegisterUser />} /> */}
    </Routes>
    </>
  )
}

export default App;
