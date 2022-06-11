import React, { useState } from 'react';
import './App.scss';
import img1 from './assets/1-kosmetyki.jpg';
import img2 from './assets/2-kosmetyki.jpg';
import img3 from './assets/4-kosmetyki.jpg';
import img4 from './assets/5-kosmetyki.jpg';
import img5 from './assets/3-kosmetyki.jpg';
import img6 from './assets/6-kosmetyki.jpg';
import img7 from './assets/7-kosmetyki.jpg';
import img8 from './assets/8-kosmetyki.jpg';
import img9 from './assets/9-kosmetyki.jpg';
import img10 from './assets/10-kosmetyki.jpg';
import img11 from './assets/11-chemia-gospodarcza.jpg';
import img12 from './assets/12-ksiazki.jpg';
import img13 from './assets/13-ksiazki.jpg';
import img14 from './assets/14-ksiazki.jpg';
import img15 from './assets/15-ksiazki.jpg';
import img16 from './assets/16-wydawnictwo-muzyczne.jpg';
import img17 from './assets/17-wydawnictwo-muzyczne.jpg';
import img18 from './assets/18-plakat.jpg';
import img19 from './assets/19-plakat.jpg';
import img20 from './assets/20-plakat.jpg';
import img21 from './assets/21-plakat.jpg';
import img22 from './assets/22-plakat.jpg';
import img23 from './assets/1-RYSUNEK.jpg';
import img24 from './assets/2-RYSUNEK.jpg';
import img25 from './assets/3-RYSUNEK.jpg';
import img26 from './assets/4-RYSUNEK.jpg';

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
    var images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14,img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26]
  

    for(let i in images) {
      if(i == number) {
        setImage(Image = images[i])
      }
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
        <div className='Title'>
          Kosmetyki
        </div>
        <div className='App-Main-Item App-Main-Item1' onClick={() => OpenPopup(0)}>
          
        </div>
        <div className='App-Main-Item App-Main-Item2' onClick={() => OpenPopup(1)}>

        </div>
        <div className='App-Main-Item App-Main-Item3' onClick={() => OpenPopup(2)}>

        </div>
        <div className='App-Main-Item App-Main-Item4' onClick={() => OpenPopup(3)}>

        </div>
        <div className='App-Main-Item App-Main-Item5' onClick={() => OpenPopup(4)}>

        </div>
        <div className='App-Main-Item App-Main-Item6' onClick={() => OpenPopup(5)}>

        </div>
        <div className='App-Main-Item App-Main-Item7' onClick={() => OpenPopup(6)}>

        </div>
        <div className='App-Main-Item App-Main-Item8' onClick={() => OpenPopup(7)}>

        </div>
        <div className='App-Main-Item App-Main-Item9' onClick={() => OpenPopup(8)}>

        </div>
        <div className='App-Main-Item App-Main-Item10' onClick={() => OpenPopup(9)}>

        </div>

        <div className='Title'>
          Kosmetyki
        </div>

        <div className='App-Main-Item App-Main-Item11' onClick={() => OpenPopup(10)}>

        </div>
        <div className='App-Main-Item App-Main-Item12' onClick={() => OpenPopup(11)}>

        </div>
        <div className='App-Main-Item App-Main-Item13' onClick={() => OpenPopup(12)}>

        </div>
        <div className='App-Main-Item App-Main-Item14' onClick={() => OpenPopup(13)}>

        </div>
        <div className='App-Main-Item App-Main-Item15' onClick={() => OpenPopup(14)}>

        </div>
        <div className='App-Main-Item App-Main-Item16' onClick={() => OpenPopup(15)}>

        </div>
        <div className='App-Main-Item App-Main-Item17' onClick={() => OpenPopup(16)}>

        </div>
        <div className='App-Main-Item App-Main-Item18' onClick={() => OpenPopup(17)}>

        </div>
        <div className='App-Main-Item App-Main-Item19' onClick={() => OpenPopup(18)}>

        </div>
        <div className='App-Main-Item App-Main-Item20' onClick={() => OpenPopup(19)}>

        </div>
        <div className='App-Main-Item App-Main-Item21' onClick={() => OpenPopup(20)}>

        </div>
        <div className='App-Main-Item App-Main-Item22' onClick={() => OpenPopup(21)}>

        </div>
        <div className='App-Main-Item App-Main-Item23' onClick={() => OpenPopup(22)}>

        </div>
        <div className='App-Main-Item App-Main-Item24' onClick={() => OpenPopup(23)}>

        </div>
        <div className='App-Main-Item App-Main-Item25' onClick={() => OpenPopup(24)}>

        </div>
        <div className='App-Main-Item App-Main-Item26' onClick={() => OpenPopup(25)}>

        </div>
      </main>
      <div className={`App-Popup ${Popup}`} onClick={ClosePopup}>
        <img src={Image} className='App-Popup-Image' alt=''/>
      </div>
    </div>
  );
}

export default App;
