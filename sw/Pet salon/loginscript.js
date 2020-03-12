
var passlib=[{
    user:"teacher",
    pass:"petsalon"
}];





function apch(){
   var user = document.getElementById("user").value;
   var pass = document.getElementById("pass").value;
   
   var pl = passlib.length;

for(i=0;i<pl; i++){
    if(user == passlib[i].user && pass == passlib[i].pass){
      location.replace("register.html")  
    }

}
  

}

