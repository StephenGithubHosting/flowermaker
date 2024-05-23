import React, { useRef, useState } from 'react';
import './Home.css';
import DomToImage from 'dom-to-image';


import A from '/images/alphabet/Removed Background/a.png'
import B from '/images/alphabet/Removed Background/b.png'
import C from '/images/alphabet/Removed Background/c.png'
import D from '/images/alphabet/Removed Background/d.png'
import E from '/images/alphabet/Removed Background/e.png'
import F from '/images/alphabet/Removed Background/f.png'
import G from '/images/alphabet/Removed Background/g.png'
import H from '/images/alphabet/Removed Background/h.png'
import I from '/images/alphabet/Removed Background/i.png'
import J from '/images/alphabet/Removed Background/j.png'
import K from '/images/alphabet/Removed Background/k.png'
import L from '/images/alphabet/Removed Background/l.png'
import M from '/images/alphabet/Removed Background/m.png'
import N from '/images/alphabet/Removed Background/n.png'
import O from '/images/alphabet/Removed Background/o.png'
import P from '/images/alphabet/Removed Background/p.png'
import Q from '/images/alphabet/Removed Background/q.png'
import R from '/images/alphabet/Removed Background/r.png'
import S from '/images/alphabet/Removed Background/s.png'
import T from '/images/alphabet/Removed Background/t.png'
import U from '/images/alphabet/Removed Background/u.png'
import V from '/images/alphabet/Removed Background/v.png'
import W from '/images/alphabet/Removed Background/w.png'
import X from '/images/alphabet/Removed Background/x.png'
import Y from '/images/alphabet/Removed Background/y.png'
import Z from '/images/alphabet/Removed Background/z.png'
import TikTok from '/images/tiktok.png'

import classicbowtie from '/images/bowties/bowtie.png';
import cardboardnamedbowtie from '/images/bowties/cardboard bowtie invisible.png';
import { saveAs } from 'file-saver';
import FlowerList from '../../components/flower list/FlowerList';

const Home = () => {
  const [isBeingDownloaded, setIsBeingDownloaded] = useState(false);
  const [normalBowtieActive, setNormalBowtieActive] = useState(false);
  const [cardboardBowtieActive, setCardboardBowtieActive] = useState(false);
  const [showFlowerName, setShowFlowerName] = useState(false);
  const [disabledDownloadState, setDisabledDownloadState] = useState(false);
  const [flowerDisplayList, setFlowerDisplayList] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef();
  const [name, setName] = useState('');
  const maxNameLength = 12;
  const letters = /^[A-Za-z]+$/;
  const flowerWindowRef = useRef();
  const ref = useRef();
  const downloadButtonRef = useRef();
  const texts = [
    `Maybe add your crush's name, or someone ? `,
    `How sad you are... You don't have a crush?`,
    `You can't be that serious...`,
    `I'm sure you have someone in mind...`,
    `Orrr.. You could put my old crush's name... You know, Gabby...`
  ];
  const [dudeWhat, setDudeWhat] = useState(false);

  const handleTyping = (e) => {
    
    if (inputRef.current.value.includes(' ')){
      inputRef.current.value = name.replace(' ', '');
    }
    if (inputRef.current.value.length >= maxNameLength){
      inputRef.current.value = name.slice(0, maxNameLength);
    }

    if (inputRef.current.value.match(letters)) {
      // good! keep up the good work!
    } else if (!inputRef.current.value.match(letters) && !inputRef.current.value.length == ''){
      inputRef.current.value = inputRef.current.value.slice(0, -1);
      // console.log(`what's up?`)
      handleErrorFunction();
      
    }
    setName(e.target.value);

  };
  const chooser = (bowtie) =>{
    if (bowtie == 'classic'){
      setCardboardBowtieActive(false);
      if(normalBowtieActive == false){
        setNormalBowtieActive(true)
      } else setNormalBowtieActive(false);
    } else if (bowtie == 'cardboard'){
      setNormalBowtieActive(false);
      if(cardboardBowtieActive == false){
        setCardboardBowtieActive(true)
      } else setCardboardBowtieActive(false);
    }
  };
  // a
  let wdwm = 0;
  let wswm = 0;
  const handleErrorFunction = () => {
    setError(true);
    // console.log('yo');
    if (!inputRef.current.value){   
      document.getElementsByClassName('error')[0].style.animation = 'none';
      setTimeout(()=>{
      document.getElementsByClassName('error')[0].style.animation = 'error 4s linear forwards';
      }, 0);
    }


  };
  return (
    <>
          <div className="flower-creator">
              <div className="title">
                  <div className="ib">
                      <p>Inspired by:</p>
                      <img src={TikTok} onClick={() => window.location.href = 'https://www.tiktok.com/@herherykwan/video/7369561154600848646?_r=1&_t=8mTmX7zhViM'}></img>
                  </div>
                  <h1>Name to Flower Generator</h1>
                  <div className="flowers_addon">
                      <img src={A} alt="" />
                      <img src={D} alt="" />
                      <img src={F} alt="" />
                      <img src={G} alt="" />
                  </div>
              </div>
            <div className="form">
               <div className="inputs">
                    <input type='text' placeholder='Enter your name' onChange={(e)=>{handleTyping(e)}} ref={inputRef}/>
                    <button onClick={()=>{setShowFlowerName(true)}}>Generate</button>
               </div>
              
               <div className="bowties">
                  <h2><span>(Optional)</span> <span>Bowties:</span>
                    </h2>
                  <div className="flex-selection">
                      <img src={classicbowtie} alt=""  onClick={()=>{chooser('classic')}} className={`${normalBowtieActive ? 'selected' : 'deselected'}`}/>
                      <h3>or</h3>
                  <div className={`cardboardnamed ${cardboardBowtieActive ? 'active' : 'deactive'}`} onClick={() => { chooser('cardboard')}}>
                      {name ? name : 'your name here <3'}
                    </div>
                  </div>
               </div>

          <div className="btn_show_list">
            <button onClick={()=>{setDudeWhat(true)}}>Show Flower List</button>
          </div>
            </div>
          {
            error && <>
            <div className={`error`}>
              <h2>only alphabetical characters are allowed!!! {">:("}</h2>
              <h3>No emoji!!!!!!!</h3>
            </div>
            </>
          }
          </div>
          <div className={`flower-output ${showFlowerName ? 'gen' : 'nogen'}`}>
            {
              name == '' && <>
                <div className="noname" >
                  <h2 style={{ width: "100%", fontSize: "10px" }}>
                    {texts[Math.floor(Math.random() * texts.length)]}
                  </h2>
                </div>
              </>
            }
          <div className={`centered-flower-window ${showFlowerName ? 'gen' : 'nogen'}`} ref={ref}>
                  <div className="top-name">
                    <h3>Flower output:</h3>

                  </div>
                  <div className="picture-content" ref={flowerWindowRef}>
                        {/* <div className="flowers"> */}
                        {/* <div className="flowas"> */}
                          {name.split('').map((letter, index) => {
                            return <img src={`/images/alphabet/Resized and Removed Background/${letter.toLowerCase()}.png`} style={{ width: "200px" }} alt={letter} className={`flowerImage ${isBeingDownloaded && 'isdownloaded'}`}/>
                            
                          })}
                        {/* </div> */}
                          { 
                            normalBowtieActive && !cardboardBowtieActive && (<img className={`bowtieIMG ${isBeingDownloaded && 'isdownloaded'}`} src={classicbowtie} alt="" style={{width:"200px"}}/>)
                          }
                          {
                            !normalBowtieActive && cardboardBowtieActive && <>
                              <div className={`cardboardnamed display ${isBeingDownloaded && 'isdownloaded'}`}>
                                {name ? name : 'incoming text'}
                              </div>
                            </>
                          }
                          
                        {/* </div> */}
                     
                  </div>
                          
              <div className="other-options">
                <div className="download">
                  <button useRef={downloadButtonRef} className={`btn ${disabledDownloadState ? 'disabled' : ''}`} onClick={()=>{
                    if (name == ''){
                      setDisabledDownloadState(true);
                    } else{
                      setIsBeingDownloaded(true);
                      DomToImage.toBlob(flowerWindowRef.current).then((blob)=>{
                        saveAs(blob, 'flower.png');
                        setIsBeingDownloaded(false);
                      });
                    }

                  }}>Download</button>
                </div>
                <div className="close">
                  <button onClick={()=>{setShowFlowerName(false); setName(''); inputRef.current.value = ''}}>Close</button>
                </div>
                {/* <button>About this projekt</button> */}
                
              </div>
              </div>
          </div>

          


          
          

         
            
            <div className={`flower-lists ${dudeWhat ? 'active' : 'noactive'}`}>
            <div className={`window-flower-list ${dudeWhat ? 'active' : 'noactive'}`}>
                <div className="topnavbar">
                  <h2>Flower List:</h2>
                  <button onClick={()=>{setDudeWhat(false)}} className='close_'>X</button>
                </div>
                <div className="flowerlistbottom">
                  <FlowerList letter='a'/>
                  <FlowerList letter='b'/>
                  <FlowerList letter='c'/>
                  <FlowerList letter='d'/>
                  <FlowerList letter='e'/>
                  <FlowerList letter='f'/>
                  <FlowerList letter='g'/>
                  <FlowerList letter='h'/>
                  <FlowerList letter='i'/>
                  <FlowerList letter='j'/>
                  <FlowerList letter='k'/>
                  <FlowerList letter='l'/>
                  <FlowerList letter='m'/>
                  <FlowerList letter='n'/>
                  <FlowerList letter='o'/>
                  <FlowerList letter='p'/>
                  <FlowerList letter='q'/>
                  <FlowerList letter='r'/>
                  <FlowerList letter='s'/>
                  <FlowerList letter='t'/>
                  <FlowerList letter='u'/>
                  <FlowerList letter='v'/>
                  <FlowerList letter='w'/>
                  <FlowerList letter='x'/>
                  <FlowerList letter='y'/>
                  <FlowerList letter='z'/>
                  
                </div>
              </div>
            </div>
            </>
         

 
  )
}

export default Home;

