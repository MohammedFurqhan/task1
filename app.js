// Form validation

function validation(){
    alert("hello");
// var name = document.getElementById("Name").value;
// var email = document.getElementById("email").value;
// var phn = document.getElementById("phn").value;
    
//     var text;
//     alert(name);

// //     if(name.length < 5){
// //         text ="please enter valid Name";
// //         errorElement.innerHTML =text;
// //         return false;
// // }
}

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

// Button Top
btnScroll.addEventListener("click" , function(){
    window.scrollTo(0 , 0);//(left , top)
});


// IMAGE SLIDER CODE//
var i = 0 ;
var images =[];
var time = 300;
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



