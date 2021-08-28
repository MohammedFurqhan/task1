const Url = 'https://jsonplaceholder.typicode.com';
async function getAllPost() {
    var request = new Request(`${Url}/posts`);
    const responseData = await fetch(request, { mode: 'no-cors' }).then(response => {
        console.log(response);
        return response.json();
    });
    console.table(responseData);
    responseData.map(data => {
        const cardContainer = document.querySelector('.card-container');
        console.log(cardContainer);
        const card = document.createElement('div');
        const img = document.createElement('img');
        img.src = '/images/hero1.svg';
        img.classList.add('card-img-top');
        card.appendChild(img);
        const cardBody = document.createElement('div');
        const title = document.createElement('h5');
        title.innerHTML = data.title;
        title.classList.add('card-title');
        const body = document.createElement('body');
        body.innerHTML = data.body;
        body.classList.add('card-text');
        cardBody.appendChild(title);
        cardBody.appendChild(body);
        cardBody.classList.add('card-body');
        card.appendChild(cardBody);
        card.classList.add('card');
        card.style.width = "18 rem";
        console.log(card);
        cardContainer.appendChild(card);
    });
}
window.onload = getAllPost;
