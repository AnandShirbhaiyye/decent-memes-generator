import React from 'react';
import { useState} from "react";
import './Meme.css';

function Meme() {
    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
        }    
    );

    function getMemeImg() {
        
    }

  return (
    <>
            <div className="meme-container">
                <input
                    type="text"
                    placeholder="Top text"
                    className="meme-input"
                    name="topText"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="meme-input"
                    name="bottomText"
                />
                <button
                    className="meme-button"
                    onClick={getMemeImg}
                >
                    Get a new meme image
                </button>
            </div>

            <div className="result-container">
                <img src={meme.randomImage}/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
    </>
  )
}

export default Meme