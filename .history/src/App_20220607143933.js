import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        Wojchech Głuszkowski<br />
        Graphic Designer
        <div className="App-Button">
          <i className="fa-solid fa-arrow-down App-Button-Arrow"></i>
        </div>
        
      </header>
      <main className='App-Main'>
        <div className='Item'>
          <img src={logo} />
        </div>
        <div className='Item'>

        </div>
        <div className='Item'>

        </div>
        <div className='Item'>

        </div>
        <div className='Item'>

        </div>
      </main>
    </div>
  );
}

export default App;
