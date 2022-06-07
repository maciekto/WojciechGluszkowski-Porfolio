import React, { useState } from 'react';
import './App.scss';
import img1 from './assets/1.jpeg';

function App() {

  let [HeaderClickedClass, setHeaderClickedClass] = useState()

  const Main = () => {
    setHeaderClickedClass(HeaderClickedClass = 'App-Header-Clicked')
    console.log(HeaderClickedClass)
  }


  return (
    <div className="App">
      <header className={`App-Header ${HeaderClickedClass}`}>
        Wojchech Głuszkowski<br />
        Graphic Designer
        <div className="App-Button" onClick={Main}>
          <i className="fa-solid fa-arrow-down App-Button-Arrow"></i>
        </div>
        
      </header>
      <main className='App-Main'>
        <div className='App-Main-Item App-Main-Item1'>
          <img src={img1} className='App-Main-Popup'/>
        </div>
        <div className='App-Main-Item App-Main-Item2'>

        </div>
        <div className='App-Main-Item App-Main-Item3'>

        </div>
        <div className='App-Main-Item App-Main-Item4'>

        </div>
        <div className='App-Main-Item App-Main-Item5'>

        </div>
        <div className='App-Main-Item App-Main-Item6'>

        </div>
      </main>
    </div>
  );
}

export default App;
