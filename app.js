console.log("Hello")
var nav = document.querySelector(".nav")
var navmid = document.querySelector(".nav")
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
