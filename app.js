console.log("hello")
var nav = document.querySelector(".nav")

window.onscroll = function()
{
    var top  = window.scrollY;
    console.log(top);
    if(top >=36)
    {
        nav.classList.add('active');
    }
    else
    {
        nav.classList.remove('active');
    }
}
// $(function() {
//     $(window).on("scroll", function() {
//         if($(window).scrollTop() > 50) {
//             $("nav").addClass("change");
//         } else {
//             //remove the background property so it comes transparent again (defined in your css)
//            $("nav").removeClass("change");
//         }
//     });
// });