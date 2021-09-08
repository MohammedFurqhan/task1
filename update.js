var userid = document.getElementById('UserID');
var inputid = document.getElementById('id');
var htmltitle = document.getElementById('title');
var htmlbody = document.getElementById('body-part');
var update = document.getElementById('submit');
var editforms = document.getElementById('myform');
var urlsearch = window.location.search;
var URLSearchParam = new URLSearchParams(urlsearch);
var urlid = URLSearchParam.get('id');
function editPost() {
    var urls = 'https://jsonplaceholder.typicode.com/posts/' + urlid;
    // console.log(urls); 
    fetch(urls)
        .then(function (response) { return response.json(); })
        .then(function (datas) {
        // console.log(datas);
        userid.value = datas.userId;
        inputid.value = datas.id;
        htmltitle.value = datas.title;
        htmlbody.value = datas.body;
    });
}
editforms.addEventListener("submit", function (event) {
    var updatedId = inputid.value;
    var updatedtitle = htmltitle.value;
    var updatedBody = htmlbody.value;
    console.log("Updated Post ");
    console.log("ID : " + updatedId + "\n" + "Title : " + updatedtitle + "\n" + "Body : " + updatedBody);
    event.preventDefault();
    console.log('clicked');
    alert('Post ID' + urlid + ' Successfully updated');
});
editPost();
