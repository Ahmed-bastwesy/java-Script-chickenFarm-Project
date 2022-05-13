let loginButton = document.querySelector('.submit');
let userNameText = document.querySelector('#userName');
loginButton.addEventListener('click',function(e){
        //e.preventDefault();
       //validation name 
       var regEx = /^[a-zA-Z- ]+$/;
       if(userNameText.value == '')
       {
           alert("please enter your name");
           return;
       }
       else if (isNaN(userNameText.value.match(regEx))==false)
       {
          alert("please enter your name as character")
          return;
       }


});



