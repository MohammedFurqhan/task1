function validatepost() {
    var id = document.getElementById("id").value;
    var title = document.getElementById("title").value;
    var body = document.getElementById("body-part").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";
    var text;
    if (id.length < 1) {
        text = "Please Enter valid ID";
        error_message.innerHTML = text;
        return false;
    }
    if (id <= 100) {
        text = "Post ID " + id + " already taken";
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
    alert("Post ID " + id + " Created Successfully! ");
}
