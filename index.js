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
const ul = document.querySelector(".coffee2")
const submitBtn = document.querySelector(".submitListener2")
submitBtn.addEventListener('submit', (event) =>{
    event.preventDefault()
    const input = document.querySelector(".input-text")
    console.log(event.target.comment.value)
    const newLi = document.createElement('li')
    newLi.className = "newLi"
    ul.appendChild(newLi)
    newLi.innerText = event.target.comment.value
    event.target.reset()
    alert('Your Coffee will be ready in a hour')
}
)
const ul1 = document.querySelector(".coffee1")
const submitBtn1 = document.querySelector(".submitListener1")
submitBtn1.addEventListener('submit', (event) =>{
    event.preventDefault()
    const input = document.querySelector(".input-text")
    console.log(event.target.comment.value)
    const newLi1 = document.createElement('li')
    newLi1.className = "newLi1"
    ul1.appendChild(newLi1)
    newLi1.innerText = event.target.comment.value
    event.target.reset()
    alert('Your Coffee will be ready in a hour')
}
)
const ul3 = document.querySelector(".coffee3")
const submitBtn3 = document.querySelector(".submitListener3")
submitBtn3.addEventListener('submit', (event) =>{
    event.preventDefault()
    // const input = document.querySelector(".input-text")
    console.log(event.target.comment.value)
    const newLi3 = document.createElement('li')
    newLi3.className = "newLi3"
    ul3.appendChild(newLi3)
    newLi3.innerText = event.target.comment.value
    event.target.reset()
    alert('Your Coffee will be ready in a hour')
}
)

    // let newComment = {
    //     "imageId": 1,
    //     "content": newLi.innerText
    // }
    // postURL(newComment)

// const newLi = document.createElement("li")
// newLi.className = "newLi"
// const input = document.querySelector(".input-text")
//   console.log(newLi.innerText = input.value)
//   document.querySelector(".coffee2").appendChild(newLi)
//   event.target.reset()

// const submitButton = document.querySelector(".submit1")
// submitButton.addEventListener('click', (event) => {
//   event.preventDefault()
//   console.log('hola')
// })

