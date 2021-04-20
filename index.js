var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); 
}

// }

// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'

// const likeGlyph = document.querySelectorAll('.like-glyph')
// function likeBtn(event){
//   const heart = event.target;

//     mimicServerCall().then(function(){
//       if(heart.innerText === EMPTY_HEART){
//         heart.innerText = FULL_HEART
//         heart.className = "activated-heart"
//       }
//       else if (like.innerText === FULL_HEART){
//         heart.innerText = EMPTY_HEART
//         heart.className = ""
//       }
//     })
// }
// for (const glyph of likeGlyph){
// glyph.addEventListener('click', likeBtn);
// }

// function mimicServerCall(url="http://mimicServer.example.com", config={}) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       let isRandomFailure = Math.random() < .2
//       if (isRandomFailure) {
//         reject("Random server error. Try again.");
//       } else {
//         resolve("Pretend remote server notified of action!");
//       }
//     }, 300);
//   });
// }