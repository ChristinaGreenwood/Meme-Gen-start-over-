import React, { useState } from "react";
import memesData from "./memesData";

function Meme() {
  // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    // setMemeImage(memesArray[randomNumber].url);
    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevSetMeme) => ({
      ...prevSetMeme,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className='form'>
        <input
          className='form-input'
          type='text'
          placeholder='Top text'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className='form-input'
          type='text'
          placeholder='Bottom text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className='form-button' onClick={getMemeImage}>
          Get a new meme image 🌅
        </button>
        <br />
      </div>
      <div className='meme'>
        <img className='meme--image' src={meme.randomImage}></img>
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
}
export default Meme;
