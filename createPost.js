function validatePost() {
    var UserId = document.getElementById("UserID").value;
    var title = document.getElementById("title").value;
    var body = document.getElementById("body-part").value;
    var myform = document.getElementById("myform");
    var error_message = document.getElementById("error_message");
    var url = 'https://jsonplaceholder.typicode.com/posts';
    myform.addEventListener("submit", function myForm(event) {
        event.preventDefault();
    });
    error_message.style.padding = "10px";
    var text;
    if (UserId.length < 1) {
        text = "Please Enter valid User ID";
        error_message.innerHTML = text;
        return false;
    }
    if (title.length < 6) {
        text = "Please Enter the Title name";
        error_message.innerHTML = text;
        return false;
    }
    if (body.length < 5) {
        text = "Please post something";
        error_message.innerHTML = text;
        return false;
    }
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            userId: UserId,
            title: title,
            body: body
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        return alert("Post ID : " + data.id + " Created Successfully! ");
    });
}
