const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  //e.stopPropagation(); //stop bubbling
}

document.body.addEventListener('click', logText); // listens for a click

divs.forEach(div => div.addEventListener('click', logText, {
  capture: true,
  once: true //listens for a click then unbinds itself
}));

button.addEventListener('click', () => {
  console.log('clickkkkkkk');
}, {
  once: true // button can only be clicked once.
})
