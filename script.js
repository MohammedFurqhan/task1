// if((name.length < 5) && (email.indexOf("@") == -1 || email.length < 6) && (state.length < 5) && (isNaN(phone) || phone.length != 10) && (message.length <= 140)){
// Form validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const state = document.getElementById("state").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";
    var text;
    if (name.length < 5) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        console.log(email);
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (state.length < 5) {
        text = "Please Enter Correct State";
        error_message.innerHTML = text;
        return false;
    }
    if (phone.length != 10) {
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 30) {
        text = "Please Enter More Than 140 Characters";
        error_message.innerHTML = text;
        return false;
    }
    // Printing input value in JSON format
    function handleFormSubmit(event) {
        //const form = document.querySelector('#myform') as HTMLFormElement
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);
        const formJSON = Object.keys(data).map(obj => `${obj}:${data[obj]}`);
        const results = document.querySelector('.results pre');
        results.innerText = formJSON;
    }
    var form = document.querySelector('.contact-form');
    form.addEventListener('submit', handleFormSubmit);
    // alert("Form Submitted Successfully!");
    return true;
}
//   End of Form validation part
// Start of nav scroll color change
console.log("Hello");
var nav = document.querySelector(".nav");
var navmid = document.querySelector(".nav");
var btnScroll = document.querySelector("#btn-scrollup");
window.onscroll = function () {
    var top = window.scrollY;
    console.log(top);
    if (top >= 36) {
        nav.classList.add('active');
    }
    else {
        nav.classList.remove('active');
    }
};
// End of nav scroll color change
// Start of Button Top
btnScroll.addEventListener("click", function () {
    window.scrollTo(0, 0); //(left , top)
});
// END OF BUTTON TOP
// START OF IMAGE SLIDER CODE//
var i = 0;
var images = [];
var time = 1500;
// var slide = document.querySelector(".slide")
// Image list
images[0] = '/images/hero1.svg';
images[1] = '/images/hero2.svg';
images[2] = '/images/hero3.svg';
function changeSliderImg() {
    const sliderImg = document.getElementById('slide');
    if (sliderImg) {
        sliderImg.src = images[i];
    }
    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout(() => {
        changeSliderImg();
    }, time);
}
// <div class="card" style="width: 18rem;">
// <img class="card-img-top" src="/images/hero1.svg" alt="Card image cap">
// <div class="card-body">
//   <h5 class="card-title">Card title</h5>
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// </div>
// </div>
window.onload = changeSliderImg;
