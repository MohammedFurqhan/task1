// if((name.length < 5) && (email.indexOf("@") == -1 || email.length < 6) && (state.length < 5) && (isNaN(phone) || phone.length != 10) && (message.length <= 140)){
    



// Form validation

function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var state = document.getElementById("state").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        console.log(email)
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
      }
    if(state.length < 5){
      text = "Please Enter Correct State";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    
    if(message.length <= 30){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    // Printing input value in JSON format
    function handleFormSubmit(event) 
    {
        event.preventDefault();
        console.log(event.target)
        const data = new FormData(event.target);
        const formJSON = Object.fromEntries(data.entries());
        // for multi-selects, we need special handling
        // formJSON.snacks = data.getAll('snacks');
        // const results = document.getElementById("error_messages");
        const results = document.querySelector('.results pre');
        results.innerText = JSON.stringify(formJSON,null, 2);
    }
      
    var form = document.querySelector('.contact-form');
    form.addEventListener('submit', handleFormSubmit);    
    // alert("Form Submitted Successfully!");
    return true;
  }
//   End of Form validation part

// Start of nav scroll color change
console.log("Hello")
var nav = document.querySelector(".nav")
var navmid = document.querySelector(".nav")
var btnScroll = document.querySelector("#btn-scrollup")
window.onscroll = function()
{
    var top  = window.scrollY;
    console.log(top);
    if(top >= 36)
    {
        nav.classList.add('active');
    }
    else
    {
        nav.classList.remove('active');
    }
}
// End of nav scroll color change

// Start of Button Top
btnScroll.addEventListener("click" , function(){
    window.scrollTo(0 , 0);//(left , top)
});
// END OF BUTTON TOP

// START OF IMAGE SLIDER CODE//
var i = 0 ;
var images =[];
var time = 1500;
// var slide = document.querySelector(".slide")

// Image list

images[0] = '/images/hero1.svg';
images[1] = '/images/hero2.svg';
images[2] = '/images/hero3.svg';

function changeImg() {
    document.slide.src= images[i];

    if(i < images.length -1){
        i++;
    }else{
        i=0;
    }

    setTimeout("changeImg()" , time);
}

window.onload = changeImg;












































// All post written SB
// // 
// // const Url = 'https://jsonplaceholder.typicode.com'
// const Url = 'https://jsonplaceholder.typicode.com/posts'
// async function getallpost(id : number) {
//     const responseData = await fetch(`${Url}/posts`, {mode: "no-cors"}).then(response => response.json());
//     console.table(responseData)
//     responseData.map(data => {
//         const cardContainer = document.querySelector('.card-container') as HTMLDivElement;
//         console.log(cardContainer)
//           const card = document.createElement('div');
//           const img = document.createElement('img');
//           img.src = '/images/hero1.svg';
//           img.classList.add('card-img-top');
//           card.appendChild(img);
//           const cardBody = document.createElement('div');
//           const title = document.createElement('h5');
//           title.innerHTML = data.title;
//           title.classList.add('card-title');
//           const body = document.createElement('body');
//           body.innerHTML = data.body;
//           body.classList.add('card-text');
//           cardBody.appendChild(title);
//           cardBody.appendChild(body);
//           cardBody.classList.add('card-body');
//           card.appendChild(cardBody);
//           card.classList.add('card');
//           card.style.width = "18 rem";
//           console.log(card)
//           cardContainer.appendChild(card)
//     })
    
//     
//   }
// window.onload = getallpost;