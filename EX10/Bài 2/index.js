
function save(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var rePassword = document.getElementById('rePassword').value;
    // var trueCheck = document.getElementById('trueCheck');

    if(_.isEmpty(name)){
        document.getElementById('error').innerHTML = 'Uyen ngao ver lor!';
        document.getElementById('trueCheck').style.display = "";
    } else if(name.length < 9){
        document.getElementById('error').innerHTML = 'Vui lang nhap > 8 ki tu!';
        document.getElementById('trueCheck').style.display = "";
    } else {
        document.getElementById('error').innerHTML = '';
        document.getElementById('trueCheck').style.display = "block";
    }


    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email !==''){
        if (re.test(email) == false) 
        {
           document.getElementById('error-1').innerHTML = 'Email sai dinh dang kia ma!';
           document.getElementById('trueCheck-1').style.display = "";
       }else{
           document.getElementById('error-1').innerHTML = '';
           document.getElementById('trueCheck-1').style.display = "block";
       }
   }else{
       document.getElementById('error-1').innerHTML = 'Vui long nhap email!';
       document.getElementById('trueCheck-1').style.display = "";
   }




   var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
   if(phone !==''){
    if (vnf_regex.test(phone) == false) 
    {
       document.getElementById('error-2').innerHTML = 'Sai dinh dang kia ma!';
       document.getElementById('trueCheck-2').style.display = "";
   }else{
       document.getElementById('error-2').innerHTML = '';
       document.getElementById('trueCheck-2').style.display = "block";
   }
}else{
   document.getElementById('error-2').innerHTML = 'Vui long nhap sdt!';
   document.getElementById('trueCheck-2').style.display = "";
}




if(_.isEmpty(password)){
    document.getElementById('error-3').innerHTML = 'Vui long nhap password!';
    document.getElementById('trueCheck-3').style.display = "";
}else {
    document.getElementById('error-3').innerHTML = '';
    document.getElementById('trueCheck-3').style.display = "block";
}

if(_.isEmpty(rePassword)){
    document.getElementById('error-4').innerHTML = 'Vui long nhap lai password!';
    document.getElementById('trueCheck-4').style.display = "";
}
else if(password != rePassword){
    document.getElementById('error-4').innerHTML = 'ko trung khop!';
    document.getElementById('trueCheck-4').style.display = "";
}
else {
    document.getElementById('error-4').innerHTML = '';
    document.getElementById('trueCheck-4').style.display = "block";
}
}