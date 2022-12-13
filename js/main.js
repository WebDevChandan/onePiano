const pianoKeys = document.querySelectorAll(".piano-keys .key"),
      volumeSlider = document.querySelector(".volume-slider input"),
      keysCheckBox = document.querySelector(".keys-checkbox input");

let allAudioKeys = [], //Storing all key values, to avoid unwanted audio keys
    audio = new Audio("assets/tunes/a.wav"); //By default audio src is `a' tune

const playTune = (key) => {
    audio.src = `assets/tunes/${key}.wav`; //passing audio source based on key press
    audio.play(); //playing audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`); //getting clickedKey element
    
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => { 
    allAudioKeys.push(key.dataset.key);
    //calling playTune funciton with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
})


//On Keyboard Key Press
const pressedKey = (btn) => {
    if (allAudioKeys.indexOf(btn.key) !== -1) playTune(btn.key);
}
document.addEventListener('keydown', pressedKey);

// Set volume
const handleVolume = (vol) => {
    // To set audio volume, value must be between 0 to 1.0 is 0%, 0.5 is 50%, and 1 is 100%;
    audio.volume = vol.target.value;
}
volumeSlider.addEventListener('input', handleVolume);


// keysCheckBox Checked/Unchecked
const showHideKeys = () => {
  pianoKeys.forEach(key=>{key.classList.toggle('hide')})
};
keysCheckBox.addEventListener("click", showHideKeys);