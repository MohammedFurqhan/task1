// const Url = 'https://jsonplaceholder.typicode.com'
function allpost() {
    var Url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(Url)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        for (var i = 0; i <= data.length; i++) {
            var p = data[i];
            console.table(p);
            var cardContainer = document.querySelector('#card-containers');
            cardContainer.innerHTML += "\n    \n        <div class=\"card\">\n        UserId:</strong>" + p.userId + "</h3>\n        <h3><strong>ID:</strong>" + p.id + "</h3>\n        <h3><strong>Title:</strong>" + p.title + "</h3>\n        <h3>\n          <strong>Body:</strong>" + p.body + "\n        </h3>\n        <div class=\"btn-box\">\n          <a href=\"/post-detail.html?id=" + p.id + "\">VIEW DETAIL</a>\n          <button class=\"delete-btn\" onclick=\"deletePost(" + p.id + ")\">DELETE</button>\n        </div>\n      </div>";
        }
    });
}
allpost();
