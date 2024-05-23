const credentials = [

    {
        username: 'dev',
        password: 'dev@123'
    }
]

function login(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username == ''){
        alert("Fill Username");
    }
    if(password == ''){
        alert("Fill Password");
    }

    var  i = 0;
    while(i < credentials.length){
        if (username == credentials[i].username && password == credentials[i].password){
            alert('Logged In Successfully');
            window.location.href = "http://google.com";
            return;
        }
        i++;
    }
    if(i== credentials.length){
        alert('Wrong Credentials');
    }
}

login()