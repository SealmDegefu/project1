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

let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const editBtn = document.querySelector(".button3");
  const toyFormContainer = document.querySelector(".container3");
  editBtn.addEventListener("click", (event) => {
      event.preventDefault()
      console.log("hey")
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

let addToy2 = false;

document.addEventListener("DOMContentLoaded", () => {
  const editBtn = document.querySelector(".button2");
  const toyFormContainer = document.querySelector(".container2");
  editBtn.addEventListener("click", (event) => {
      event.preventDefault()
      console.log("hey")
    // hide & seek with the form
    addToy2 = !addToy2;
    if (addToy2) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

let addToy1 = false;

document.addEventListener("DOMContentLoaded", () => {
  const editBtn = document.querySelector(".button1");
  const toyFormContainer = document.querySelector(".container1");
  editBtn.addEventListener("click", (event) => {
      event.preventDefault()
      console.log("hey")
    // hide & seek with the form
    addToy1 = !addToy1;
    if (addToy1) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const submitButton = document.querySelector(".submit1")
submitButton.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('hola')
})