// const id : any = (document.getElementById('id') as HTMLInputElement).innerText;
// const title : string= (document.getElementById('title') as HTMLInputElement).innerText;
// const ibody : string = (document.getElementById('body-part') as HTMLInputElement).innerText;
var urlId = window.location.search;
var urlParams = new URLSearchParams(urlId);
var id = urlParams.get('id');
console.log(id);
function viewPost() {
    var Url = 'https://jsonplaceholder.typicode.com/posts/' + id;
    console.log(Url);
    fetch(Url)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        console.table(data);
        var cardDetail = document.getElementById('detail-card');
        cardDetail.innerHTML += "\n        <div class=\"viewcard\">\n        <div class=\"card-section\">\n        <h2 class=\"post-heading\"> Post Details </h2>\n        <div>\n        <h3>UserId : </h3>" + data.userId + "\n        </div>\n        <div>\n        <h3>ID : </h3>" + data.id + "\n        </div>\n        <div>\n        <h3>Title : </h3>" + data.title + "\n        </div>\n        <div>\n        <h3>Body: </h3>" + data.body + "\n        </div>\n        </div> \n        \n        <div class=\"btn\">\n        <a class=\"update\" href=\"/editPost.html?id=" + data.id + "\"> Edit Post</a>\n        </div>";
    });
}
viewPost();
