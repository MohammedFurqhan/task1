// interface Post {
//   userId : number;
//   id : number;
//   title : string;
//   body : string;
// }
function allpost() {
    var Url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(Url)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        console.log(data);
        for (var i = 0; i <= data.length; i++) {
            var p = data[i];
            console.table(p); //It will display the JSON data in Table
            var cardContainer = document.querySelector('#card-containers');
            cardContainer.innerHTML += "\n        <div class=\"card\">\n        <div class=\"card-section\">\n        <div>\n        <h3>UserId : </h3>" + p.userId + "\n        </div>\n        <div>\n        <h3>ID : </h3>" + p.id + "\n        </div>\n        <div>\n        <h3>Title : </h3>" + p.title + "\n        </div>\n        <div>\n        <h3>Body: </h3>" + p.body + "\n        </div>\n        </div>\n        <div class=\"link\">\n          <a href=\"/viewPost.html?id=" + p.id + "\">Post Details</a>\n          <button class=\"btn-dlt\" onclick=\"deletePost(" + p.id + ")\">DELETE</button>\n        </div>\n      </div>";
        }
    });
}
function deletePost(id) {
    console.log("clicked");
    var Url2 = "https://jsonplaceholder.typicode.com/posts";
    console.log(Url2);
    fetch(Url2)
        .then(function (response) {
        return response.json();
    })
        .then(function (datas) {
        for (var j = 0; j <= datas.length; j++) {
            var q = datas[j];
            var remove = q.pop(id);
            console.log("success");
        }
    });
}
// function deletePost(id: number) {
//   const Url2 = `https://jsonplaceholder.typicode.com/posts/${id}`
//   fetch(Url2, {
//       method: "DELETE",
//     }).then((response) => {
//       return response.json();
//     })
//     .then((datas) => {
//       for (let i = 0; i <= datas.length; i++) {
//         var p = datas[i];
//         console.table(p)
//       allpost(id);
//       alert(`Post ${id} deleted successful!`);
//       }
//     });
// }
allpost();
