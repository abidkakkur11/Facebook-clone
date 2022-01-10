let username=document.getElementById("username");
let password=document.getElementById("password");
let login=document.getElementById("login");

login.onclick=function(){
    if(username.value=="abcd" && password.value=="1234")
    {
    location.href="index1.html";
    }
    else{
        //alert("a");
        document.getElementById("alerting").style.display="block";
    }
}

