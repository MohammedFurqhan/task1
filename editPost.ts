
    const inputId : any= (document.getElementById('id') as HTMLInputElement);
    const htmlTitle : any= (document.getElementById('title') as HTMLInputElement);
    const htmlBody :any = (document.getElementById('body-part') as HTMLInputElement);

    function editPost(){
   
        const urlSearch =window.location.search;
        const urlParams = new URLSearchParams(urlSearch)
        const urlId = urlParams.get('id')
        var Url2 = 'https://jsonplaceholder.typicode.com/posts/' + urlId;
        fetch(Url2)
        .then(response => { 
            return response.json()
        })
        .then(data =>{
            console.log(data);
            const {id, title, body} = data;
            inputId.value = id;
            htmlTitle.value = title;
            htmlBody.innerHTML = body;

             
    
    
        //    const contain =document.querySelector('.contact-form')as HTMLDivElement
        //    contain.innerHTML +=`
        //    <h2 id="heading">Edit Post</h2>
        //         <form id="myform"">
        //             <div class="block">
        //                 <label for="Id"> <h3>ID :<h3>
        //                     <input type="number" name="id" id="id" value =${d1} class="input-t">
        //                 </label>
        //             </div>   
        //             <div class="block">
        //                 <label for="Title"><h3> Title :</h3>
        //                     <input type="text" name="title" id="title" value=${d2} class="input-t" cols="20" rows="4">
        //                 </label>
        //              </div>
        //              <div class="block">   
        //                 <label for="Body" #body><h3> Body :</h3>
        //                     <textarea id="body-part" name="body" class="input" class="input-t" name=""
        //                         cols="40" rows="6">${d3}</textarea>
        //                 </label>
        //             </div>    
        //                 <div class="submit">
        //                     <input type="submit" id="submit">
        //                 </div>
        //             </form>`
        });
    }

    editPost()