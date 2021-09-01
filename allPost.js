// const Url = 'https://jsonplaceholder.typicode.com'
function allpost(id) {
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
            cardContainer.innerHTML += "\n    \n        <div class=\"card\">\n        UserId:" + p.userId + "\n        ID:" + p.id + "\n        Title:>" + p.title + "\n        Body:" + p.body + "\n        <div class=\"btn-box\">\n          <a href=\"/post-detail.html?id=" + p.id + "\">VIEW DETAIL</a>\n          <button class=\"delete-btn\" onclick=\"deletePost(" + p.id + ")\">DELETE</button>\n        </div>\n      </div>";
        }
    });
}
function deletePost(id) {
    var Url2 = "https://jsonplaceholder.typicode.com/posts/" + id;
    fetch(Url2, {
        method: "DELETE"
    }).then(function (response) {
        return response.json();
    })
        .then(function (_) {
        allpost(id);
        alert("Post " + id + " deleted successful!");
    });
}
allpost(0);
