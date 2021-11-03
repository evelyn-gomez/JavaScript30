
function playSound(KeyboardEvent){
    const audio = document.querySelector(`audio[data-key="${KeyboardEvent.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${KeyboardEvent.keyCode}"]`)
    console.log(audio);  
    if(!audio){
        return;// stop function from running if no key associated. 
    } 
    audio.currentTime = 0; //restart from begin; can play with out needing to finish transition 
    console.log(KeyboardEvent); 
    audio.play(); 
    
    key.classList.add('playing');     
}

const keys = document.querySelectorAll('.key'); 
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(KeyboardEvent){
    if(!KeyboardEvent.propertyName === 'transform'){return; }
    this.classList.remove('playing'); 
}



window.addEventListener('keydown', playSound)  
