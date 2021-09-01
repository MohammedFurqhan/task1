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
            console.table(p); //It will display the JSON data in Table
            var cardContainer = document.querySelector('#card-containers');
            cardContainer.innerHTML += "\n        <div class=\"card\">\n        <div>\n        <h3 >UserId : </h3>" + p.userId + "\n        </div>\n        <div>\n        <h3>ID : </h3>" + p.id + "\n        </div>\n        <div>\n        <h3>Title : </h3>" + p.title + "\n        </div>\n        <div>\n        <h3>Body : </h3>" + p.body + "\n        </div>\n        <div class=\"link\">\n          <a href=\"/post-detail.html?id=" + p.id + "\">Post Details</a>\n          <button class=\"delete-btn\" onclick=\"deletePost(" + p.id + ")\">DELETE</button>\n        </div>\n      </div>";
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
