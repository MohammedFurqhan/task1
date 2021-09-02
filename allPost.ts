
// interface Post {
//   userId : number;
//   id : number;
//   title : string;
//   body : string;
// }
function allpost() {
  const Url = 'https://jsonplaceholder.typicode.com/posts'
  fetch(Url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      for (let i = 0; i <= data.length; i++) {
        var p = data[i];
         console.table(p)//It will display the JSON data in Table

        const cardContainer = document.querySelector('#card-containers') as HTMLDivElement;
        cardContainer.innerHTML += `
        <div class="card">
        <div class="card-section">
        <div>
        <h3>UserId : </h3>${p.userId}
        </div>
        <div>
        <h3>ID : </h3>${p.id}
        </div>
        <div>
        <h3>Title : </h3>${p.title}
        </div>
        <div>
        <h3>Body: </h3>${p.body}
        </div>
        </div>
        <div class="link">
          <a href="/viewPost.html?id=${p.id}">Post Details</a>
          <button class="btn-dlt" onclick="deletePost(${p.id})">DELETE</button>
        </div>
      </div>`;
      
      }
    })
}
function deletePost(id:number){
  console.log("clicked");
  const Url2 = `https://jsonplaceholder.typicode.com/posts`
  console.log(Url2);

  fetch(Url2)
  .then((response) => {
    return response.json();
  })
  .then((datas) => {
    for (let j = 0; j <= datas.length; j++) {
      var q = datas[j];
      var remove = q.pop(id);
      console.log("success")    
    }
    })
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
allpost()