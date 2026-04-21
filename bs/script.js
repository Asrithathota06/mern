document.getElementById("myForm").addEventListener("submit", function(e){

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    if(name==""||email==""||password==""){
        alert("All fields required");
        e.preventDefault();
        return;
    }

    if(!email.includes("@")){
        alert("Invalid email");
        e.preventDefault();
        return;
    }

    if(password.length<6){
        alert("Password must be at least 6 characters");
        e.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
});