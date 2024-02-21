import React, { useState } from 'react';
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('#ffffff');

  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };
  return (
    <>
    <div className='container' style={{ backgroundColor: bgColor }} >
        
       <h1 style={{fontSize:'40px'}}>Background Color Change</h1>
       
      <div  style={{display:'flex',justifyContent:'center' , }}>
      <button onClick={() => changeBackgroundColor('#FF474C')}>Red</button>
      <button onClick={() => changeBackgroundColor('#023020')}>Green</button>
      <button onClick={() => changeBackgroundColor('#4682b4')}>Blue</button>
      <button onClick={() => changeBackgroundColor('#ffa500')}>Orange</button>
      <button onClick={() => changeBackgroundColor('#CBC3E3')}>Purple</button>
      </div>
    </div>


     
    </>
  )
}

export default App
