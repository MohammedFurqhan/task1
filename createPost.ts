
function validatepost() : boolean{
    const id : any = (document.getElementById("Id") as HTMLInputElement).value;
    const title :string = (document.getElementById("title") as HTMLInputElement).value;
    const body :string = (document.getElementById("body-part") as HTMLInputElement).value;
    let error_message: any = (<HTMLInputElement>document.getElementById("error_message"));
    
    error_message.style.padding = "10px";
    var text;
    if(id.length < 1){
     
     text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(title.length < 6){
        text ="Please Enter the Title name"
        error_message.innerHTML = text;
        return false;
      }
    if(body.length < 5){
        text ="Please post something"
        error_message.innerHTML = text;
      return false;
    }
  

    alert("Post Created Successfully! with the iD : ");
    let a=document.createElement('a');
    a.target='https://mohammedfurqhan.netlify.app/blog.html';
    a.href='https://mohammedfurqhan.netlify.app';
    
    //then use this code for alert
    if (window.confirm('Would you Like to view All Post,No'))
    {
    a.click();
    };
    return true;
}

