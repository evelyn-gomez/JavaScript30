const divs = document.querySelectorAll('div'); 

function logDivValue(e){
    console.log(this.classList.value); 
    // e.stopPropagation(); 
}

bod = document.querySelector('.bod'); 
// bod.addEventListener('click', logDivValue); 

for(let div of divs){
    div.addEventListener('click', logDivValue, {
        capture: false, 
        once: true
    })
}

const btn = document.querySelector('button'); 

btn.addEventListener('click', () => {
    console.log('click!!!!')
}, {
    once: true
})

