function validatePost(): boolean {
  const UserId: any = (document.getElementById("UserID") as HTMLInputElement).value;
  const title: string = (document.getElementById("title") as HTMLInputElement).value;
  const body: string = (document.getElementById("body-part") as HTMLInputElement).value;
  const myform: any = document.getElementById("myform") as HTMLElement;
  let error_message: any = ( < HTMLInputElement > document.getElementById("error_message"));

  const url = 'https://jsonplaceholder.typicode.com/posts';

  myform.addEventListener("submit", function myForm(event) {
    event.preventDefault();
  })
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
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((data) =>
      alert(`Post ID : ${data.id} Created Successfully! `));


}