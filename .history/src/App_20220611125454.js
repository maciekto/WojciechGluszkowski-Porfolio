import React, { useState } from 'react';
import './App.scss';
import img1 from './assets/1-kosmetyki.jpg';
import img2 from './assets/2-kosmetyki.jpg';
import img3 from './assets/3-kosmetyki.jpg';
import img4 from './assets/4-kosmetyki.jpg';
import img5 from './assets/5.jpeg';
import img6 from './assets/6.jpeg';

function App() {

  let [HeaderClickedClass, setHeaderClickedClass] = useState()
  let [MainShow, setMainShow] = useState()
  
  let [Popup, setPopup] = useState()
  let [Image, setImage] = useState();

  const Main = () => {
    setHeaderClickedClass(HeaderClickedClass = 'App-Header-Clicked');
    setMainShow(MainShow = 'App-Main-Show')
    
  }
  const OpenPopup = (number) => {
    setPopup(Popup = 'App-Popup-Open')
    switch(number){
      case 1:
        setImage(Image = img1)
      break;
      case 2:
        setImage(Image = img2)
      break;
      case 3:
        setImage(Image = img3)
      break;
      case 4:
        setImage(Image = img4)
      break;
      case 5:
        setImage(Image = img5)
      break;
      case 6:
        setImage(Image = img6)
      break;
    }
  }
  const ClosePopup = () => {
    setPopup(Popup = '')
  }

  return (
    <div className="App">
      <header className={`App-Header ${HeaderClickedClass}`}>
        Wojciech Głuszkowski<br />
        Graphic Designer
        <div className="App-Button" onClick={Main}>
          <i className="fa-solid fa-arrow-down App-Button-Arrow"></i>
        </div>
        
      </header>
      <main className={`App-Main ${MainShow}`}>
        <div className='App-Main-Item App-Main-Item1' onClick={() => OpenPopup(1)}>
          
        </div>
        <div className='App-Main-Item App-Main-Item2' onClick={() => OpenPopup(2)}>

        </div>
        <div className='App-Main-Item App-Main-Item3' onClick={() => OpenPopup(3)}>

        </div>
        <div className='App-Main-Item App-Main-Item4' onClick={() => OpenPopup(4)}>

        </div>
        <div className='App-Main-Item App-Main-Item5' onClick={() => OpenPopup(5)}>

        </div>
        <div className='App-Main-Item App-Main-Item6' onClick={() => OpenPopup(6)}>

        </div>
      </main>
      <div className={`App-Popup ${Popup}`} onClick={ClosePopup}>
        <img src={Image} className='App-Popup-Image' alt=''/>
      </div>
    </div>
  );
}

export default App;
