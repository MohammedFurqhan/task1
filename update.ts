const userid: any = (document.getElementById('UserID') as HTMLInputElement);
const inputid: any = (document.getElementById('id') as HTMLInputElement);
const htmltitle: any = (document.getElementById('title') as HTMLInputElement);
const htmlbody: any = (document.getElementById('body-part') as HTMLInputElement);
const update: any = (document.getElementById('submit') as HTMLInputElement);
const editforms: any = (document.getElementById('myform') as HTMLElement);


const urlsearch = window.location.search;
const URLSearchParam = new URLSearchParams(urlsearch);
const urlid = URLSearchParam.get('id');


const urls = 'https://jsonplaceholder.typicode.com/posts/' + urlid;
// console.log(urls); 
fetch(urls)
    .then(response => response.json())
    .then(datas => {
        // console.log(datas);
        userid.value = datas.userId;
        inputid.value = datas.id;
        htmltitle.value = datas.title;
        htmlbody.value = datas.body;
    });

function editPost() {
    fetch(`https://jsonplaceholder.typicode.com/posts/` + urlid, {
            method: "PUT",
            body: JSON.stringify({
                id: inputid.value,
                title: htmltitle.value,
                body: htmlbody.value,
                userId: userid.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then((response) => response.json())
        .then((data) =>
            editforms.addEventListener("submit", function (event) {
                const updatedId: any = inputid.value;
                const updatedtitle = htmltitle.value;
                const updatedBody = htmlbody.value;
                console.log("Updated Post ")
                console.log("ID : " + updatedId + "\n" + "Title : " + updatedtitle + "\n" + "Body : " + updatedBody);
                event.preventDefault();
                console.log('clicked');
                alert('Post ID : ' + urlid + ' Successfully updated');
            })
        );

}





editPost();