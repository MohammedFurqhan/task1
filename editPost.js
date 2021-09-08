var inputId = document.getElementById('id');
var htmlTitle = document.getElementById('title');
var htmlBody = document.getElementById('body-part');
var submit = document.getElementById('submit');
function editPost() {
    var urlSearch = window.location.search;
    var urlParams = new URLSearchParams(urlSearch);
    var urlId = urlParams.get('id');
    var Url2 = 'https://jsonplaceholder.typicode.com/posts/' + urlId;
    fetch(Url2)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        console.log(data);
        var id = data.id, title = data.title, body = data.body;
        inputId.value = id;
        htmlTitle.value = title;
        htmlBody.innerHTML = body;
    });
}
editPost();
//    const contain =document.querySelector('.contact-form')as HTMLDivElement
//    contain.innerHTML +=`
//    <h2 id="heading">Edit Post</h2>
//         <form id="myform"">
//             <div class="block">
//                 <label for="Id"> <h3>ID :<h3>
//                     <input type="number" name="id" id="id" value =${d1} class="input-t">
//                 </label>
//             </div>   
//             <div class="block">
//                 <label for="Title"><h3> Title :</h3>
//                     <input type="text" name="title" id="title" value=${d2} class="input-t" cols="20" rows="4">
//                 </label>
//              </div>
//              <div class="block">   
//                 <label for="Body" #body><h3> Body :</h3>
//                     <textarea id="body-part" name="body" class="input" class="input-t" name=""
//                         cols="40" rows="6">${d3}</textarea>
//                 </label>
//             </div>    
//                 <div class="submit">
//                     <input type="submit" id="submit">
//                 </div>
//             </form>`
