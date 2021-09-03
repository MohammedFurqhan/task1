function editPost() {
    var id = document.getElementById('id').value;
    var title = document.getElementById('title').value;
    var body = document.getElementById("body-part").value;
    var urlSearch = window.location.search;
    var urlParams = new URLSearchParams(urlSearch);
    var urlId = urlParams.get('id');
    var Url = 'https://jsonplaceholder.typicode.com/posts/' + urlId;
    // console.log(Url);
    // console.log(id);
    console.log(Url);
    fetch(Url)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        console.log(data);
        var inputId = data.id;
        inputId.value = id;
        console.log(inputId);
        var titleId = data.title;
        console.log(titleId);
        titleId.v;
        var bodyId = data.body;
        console.log(bodyId);
    });
}
editPost();
