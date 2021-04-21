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
let coffeeMaker = false;
document.addEventListener("DOMContentLoaded", () => {
  const editBtn = document.querySelector(".button3");
  const toyFormContainer = document.querySelector(".container3");
  editBtn.addEventListener("click", (event) => {
      event.preventDefault()
      console.log("hey")
    // hide & seek with the form
    coffeeMaker = !coffeeMaker;
    if (coffeeMaker) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
let coffeeMaker2 = false;
document.addEventListener("DOMContentLoaded", () => {
  const editBtn = document.querySelector(".button2");
  const toyFormContainer = document.querySelector(".container2");
  editBtn.addEventListener("click", (event) => {
      event.preventDefault()
      console.log("hey")
    // hide & seek with the form
    coffeeMaker2 = !coffeeMaker2;
    if (coffeeMaker2) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
let coffeeMaker1 = false;
document.addEventListener("DOMContentLoaded", () => {
  const editBtn = document.querySelector(".button1");
  const toyFormContainer = document.querySelector(".container1");
  editBtn.addEventListener("click", (event) => {
      event.preventDefault()
      console.log("hey")
    // hide & seek with the form
    coffeeMaker1 = !coffeeMaker1;
    if (coffeeMaker1) {
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
const url = "http://localhost:3000/drinks"
fetch(url)
.then(res => res.json())
.then(renderComment)
const ul3 = document.querySelector(".coffee3")
function renderComment (displayComment)
{
   displayComment.forEach(element =>{
    const newLi3 = document.createElement('li')
    newLi3.className = "newLi3"
    newLi3.innerText = element.comments
    ul3.appendChild(newLi3)
    // const title1 = document.querySelector('.titleOfBlog')
    //     title1.innerText = element.name.coffee1
    // console.log(element.name.coffee1)
   })
}

const submitBtn3 = document.querySelector(".submitListener3")
submitBtn3.addEventListener('submit', (event) =>{
    event.preventDefault()
    const newLi3 = document.createElement('li')
    // const input = document.querySelector(".input-text")
    newLi3.className = "newLi3"
    ul3.appendChild(newLi3)
    console.log(event.target.comment.value)
    newLi3.innerText = event.target.comment.value
    event.target.reset()
    alert('Your Coffee will be ready in a hour')
    let newPatchComment = {
        "comments": event.target.comment.value
      }
    patch(newPatchComment)
});

// fetch(url)
// .then(res => res.json())
// .then(postPreference)

// function postPreference(drinkChoices){
//     console.log(drinkChoices)
//    const option= document.querySelector("#coffee")
//    option.addEventListener('submit', () =>{
//     console.log("hey")
//     let newOption = {
//         "milk": drinkChoices.drinkDescription.milk
//     }
//     post(newOption)

//    })


// }



// function post(comment) {
//   let optionPost= {
//     method:'POST',
//     headers:{
//     'Content-Type':'application/json',
//     "Accept":'application/json'
//     },
//     body: JSON.stringify(comment),
//   }
//   fetch(url, optionPost)
//   .then(res => res.json())
//   .then(data => console.log(data))
// }
const patchUrl = "http://localhost:3000/drinks/1" 
function patch(newPatchComment) { 
    console.log(newPatchComment)
  let optionPatch= {
    method:'PATCH',
    headers:{
    'Content-Type':'application/json',
    "Accept":'application/json'
    },
    body: JSON.stringify({

    "comments": newPatchComment.value}),
  }
  fetch(patchUrl, optionPatch)
  .then(res => res.json())
  .then(data => console.log(data))
}