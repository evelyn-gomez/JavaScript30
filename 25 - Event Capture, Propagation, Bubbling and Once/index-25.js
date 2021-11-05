const divs = document.querySelectorAll('div'); 

function logDivValue(e){
    console.log(this.classList.value); 
    e.stopPropagation(); 
}

bod = document.querySelector('.bod'); 
bod.addEventListener('click', logDivValue, {
    once: true
}); 

for(let div of divs){
    div.addEventListener('click', logDivValue, {
        once: true
    })
}

const btn = document.querySelector('button'); 
btn.addEventListener('mousedown', (event) => {
    if (event.button == 0) {
        console.log("Left button");
    } else if (event.button == 1) {
        console.log("Middle button");
    } else if (event.button == 2) {
        console.log("Right button");
    }
})

const para = document.querySelector('p');
window.addEventListener("keydown", event => {
    if (event.key == "v" || event.key == 'V') {
        para.style.background= "violet";
    }
});

window.addEventListener("keyup", event => {
    if (event.key == "v" || event.key == "V") {
        para.style.background = "";
    }
});

window.addEventListener("keydown", event => {
    if (event.key == " " && event.ctrlKey) {
      console.log("Continuing!");
    }
  });


    




