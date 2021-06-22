function register(e){
    e.preventDefault();
    let form = document.getElementById('form');
    let name = form.name.value;
    let contact = form.contact.value;
    let mail = form.mail.value;
    let pass = form.pass.value;

    let users = {
        name,
        contact,
        mail,
        pass
    }

    if(users.name.trim() == '') alert('Enter Your Name');
    else if(users.contact.length != 10) alert('Incorrect Mobile Number');
    else if(users.mail.trim() == '') alert('Enter Your E-mail ID');
    else if(users.pass == '') alert('Password should not be Empty!')
    else{
    let user_data = localStorage.getItem("users");

    if(user_data==null) user_data=[]
    else user_data=JSON.parse(user_data);

    user_data.push(users);

    localStorage.setItem('users',JSON.stringify(user_data))
    console.log(users.contact.length);

    document.body.innerHTML = '<div class="wrapper"><div class="typing">Welcome to the Movie Zone</div></div>';
    document.body.style.cursor = 'progress'
    setTimeout(function () {
        window.location.href = 'login.html'
        document.body.style.cursor = "default";
    },4000)
}
}




