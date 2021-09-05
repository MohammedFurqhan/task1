// interface Post {
//   userId : number;
//   id : number;
//   title : string;
//   body : string;
// }
var cardContainer = document.querySelector('#card-containers');
function allpost(id) {
    var Url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(Url)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        console.log(data);
        cardContainer.innerHTML = "";
        var filteredData = data.filter(function (d) { return d.id !== id; });
        for (var i = 0; i <= filteredData.length; i++) {
            var p = filteredData[i];
            //It will display the JSON data in Table
            cardContainer.innerHTML += "\n        <div class=\"card\">\n        <div class=\"card-section\">\n        <div>\n        <h3>UserId : </h3>" + p.userId + "\n        </div>\n        <div>\n        <h3>ID : </h3>" + p.id + "\n        </div>\n        <div>\n        <h3>Title : </h3>" + p.title + "\n        </div>\n        <div>\n        <h3>Body: </h3>" + p.body + "\n        </div>\n        </div>\n        <div class=\"link\">\n          <a href=\"/viewPost.html?id=" + p.id + "\">Post Details</a>\n          <button class=\"btn-dlt\" onclick=\"deletePost(" + p.id + ")\">DELETE</button>\n        </div>\n      </div>";
        }
    });
}
function deletePost(id) {
    console.log("clicked");
    console.log(id);
    var Url2 = "https://jsonplaceholder.typicode.com/posts/" + id;
    console.log(Url2);
    fetch(Url2, {
        method: 'DELETE'
    })
        .then(function (response) {
        allpost(id);
        alert('Post Deleted Successfully');
    })
        .then(function (datas) {
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
