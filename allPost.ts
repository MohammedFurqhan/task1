// const Url = 'https://jsonplaceholder.typicode.com'


function allpost(): void {
  const Url = 'https://jsonplaceholder.typicode.com/posts'
  fetch(Url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for(let i=0; i<=data.length;i++){
        var p = data[i];
      console.table(p)
      const cardContainer = document.querySelector('#card-containers') as HTMLDivElement;
      cardContainer.innerHTML += `
    
        <div class="card">
        UserId:${p.userId}
        ID:${p.id}
        Title:>${p.title}
        Body:${p.body}
        <div class="btn-box">
          <a href="/post-detail.html?id=${p.id}">VIEW DETAIL</a>
          <button class="delete-btn" onclick="deletePost(${p.id})">DELETE</button>
        </div>
      </div>`;
      }
      
    })
}


allpost()