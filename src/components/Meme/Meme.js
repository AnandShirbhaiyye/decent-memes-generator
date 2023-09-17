import React from 'react';
import './Meme.css';

function Meme() {
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
                >
                    Get a new meme image
                </button>
            </div>
    </>
  )
}

export default Meme