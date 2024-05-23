import React from 'react';
import './flowerlist.css';

const FlowerList = (props) => {
  return (
    <>
        <div className="flower_type" style={{background:`url('/images/alphabet/Resized and Removed Background/${props.letter}.png')`, backgroundSize:"70% 100%", backgroundRepeat: "no-repeat", backgroundPosition:"10px"}}>
            <h2>{props.letter.toUpperCase()}/{props.letter}</h2>
        </div>
        
    </>
  )
}

export default FlowerList;