import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./Meme.css";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemes() {
      try {
        const response = await axios.get("https://api.imgflip.com/get_memes");
        setAllMemes(response.data.data.memes);
      } catch (error) {
        console.error("Error fetching memes:", error);
      }
    }

    getMemes();
  }, []);

  function getMemeImg() {
    const url = allMemes[Math.floor(Math.random() * allMemes.length)].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="meme-container">
        <input
          type="text"
          placeholder="Top text"
          className="meme-input"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="meme-input"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className="meme-button" onClick={getMemeImg}>
          Get a new meme image 
        </button>
      </div>

      <div className="result-container">
        <img src={meme.randomImage} alt="random-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
}

export default Meme;
