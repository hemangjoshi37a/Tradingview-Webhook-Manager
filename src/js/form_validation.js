function validateForm() {
    let email = document.forms["loginForm"]["email"].value;
    if (email == "") {
      alert("email must be filled out");
      return false;
    }
    let password = document.forms["loginForm"]["password"].value;
    if (password == "") {
      alert("password must be filled out");
      return false;
    }
    // let confirm_password = document.forms["loginForm"]["confirm_password"].value;
    // if (confirm_password == "") {
    //   alert("please confirm password");
    //   return false;
    // }
    // if (confirm_password != password){
    //     alert("confirm password do not match with password");
    //     return false;   
    // }

  }