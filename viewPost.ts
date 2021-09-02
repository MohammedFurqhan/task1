// const id : any = (document.getElementById('id') as HTMLInputElement).innerText;
// const title : string= (document.getElementById('title') as HTMLInputElement).innerText;
// const ibody : string = (document.getElementById('body-part') as HTMLInputElement).innerText;

var urlId = window.location.search;
var urlParams = new URLSearchParams(urlId);
var id = urlParams.get('id')
console.log(id);

function viewPost() {
    var Url = 'https://jsonplaceholder.typicode.com/posts/' + id
    console.log(Url)
    fetch(Url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.table(data)
            const cardDetail = document.getElementById('detail-card') as HTMLDivElement;
            cardDetail.innerHTML += `
        <div class="card">
        <div class="card-section">
        <div>
        <h3>UserId : </h3>${data.userId}
        </div>
        <div>
        <h3>ID : </h3>${data.id}
        </div>
        <div>
        <h3>Title : </h3>${data.title}
        </div>
        <div>
        <h3>Body: </h3>${data.body}
        </div>
        </div> 
        
        <div class="btn">
        <a class="update" href="/updatePost.html"> Update Post</a>
        </div>`


        })
}
viewPost()