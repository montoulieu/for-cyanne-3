function emojiMultiply(emojiName) {
  let emoji = document.getElementsByClassName(emojiName)[0]
  let containers = Array.from(document.getElementsByClassName('emoji-container'))
  emoji.addEventListener("animationend", test);

  containers.forEach(function(container){
    for (i=0; i < 10; i++) {
      // console.log(emoji)
      clone = emoji.cloneNode(true)

      container.appendChild(clone);
      // console.log(i + ' ' + element.classList)
    }
  });

}

function iterateOverText() {
  let active = Array.from(document.getElementsByClassName('active'))[0]

  setTimeout(function(){
    active.classList.add('enter')
    emojiMultiply(active.getAttribute('data-emoji'));
  }, 0000)

  setTimeout(function(){
    if(active.nextElementSibling !== null)
      active.classList.add('exit')
  }, 2500)

  setTimeout(function(){
    if(active.nextElementSibling !== null) {
      active.classList.remove('active','enter','exit')
      active.nextElementSibling.classList.add('active')
      iterateOverText()
    }
  }, 3000)
}

function test() {
  console.log('test');
}

document.addEventListener("DOMContentLoaded", function(event) {
  iterateOverText()
})
