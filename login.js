function login(e) {
  e.preventDefault();

  let form = document.getElementById("form");
  let mail_mob = form.mail_mob.value;
  let pass = form.pass.value;

  let users = {
    mail_mob,
    pass,
  };

  if(users.mail_mob.trim() == '') alert('Enter Your E-mail ID or Mobile No.');
  else if (users.pass == "") alert("Enter Your Password");
  else{
    let user_data = JSON.parse(localStorage.getItem("users"));
    if(user_data!=null){
    let i=0;
    user_data.forEach(function (e) {
        if((e.mail == users.mail_mob || e.contact == users.mail_mob) && e.pass == users.pass){
            document.body.style.cursor = "progress";
            login_to_home(e);
            return;
        }
        else if(i == user_data.length-1) alert('Invalid Credentials')
        i++;
    });
  }
    else{
      alert("It Seems you did not registered yourself")
      window.location.href = "signup.html"
    }
  }

  console.log('s');
}

function login_to_home(e) {
    let loggedin = localStorage.getItem("loggedin")
    if(loggedin == null) loggedin = [e];
    else loggedin = [e];

    localStorage.setItem("loggedin",JSON.stringify(loggedin));

    setTimeout(function () {
      window.location.href = "home.html";
      document.body.style.cursor = "default";
    }, 2000);
}
