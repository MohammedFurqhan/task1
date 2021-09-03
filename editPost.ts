function editPost(){
    const id : any= (document.getElementById('id') as HTMLInputElement);
    const title : string= (document.getElementById('title') as HTMLInputElement).value;
    const body :string = (document.getElementById("body-part") as HTMLInputElement).value;

    const urlSearch =window.location.search;
    const urlParams = new URLSearchParams(urlSearch)
    const urlId = urlParams.get('id')
    var Url = 'https://jsonplaceholder.typicode.com/posts/'+urlId;
    // console.log(Url);
    // console.log(id);
     console.log(Url);
    fetch(Url)
    .then(response => { 
        return response.json()
    })
    .then(data =>{
        console.log(data);
        const inputId = data.id;
        inputId.value=id;
        console.log(inputId);
        const titleId = data.title;
        console.log(titleId);
        titleId.v
        const bodyId = data.body;
        console.log(bodyId);
    });
}
editPost()