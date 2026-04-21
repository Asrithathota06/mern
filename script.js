// Form validation
document.getElementById("myForm").addEventListener("submit", function(e){

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    if(name==""||email==""||password==""){
        alert("All fields are required");
        e.preventDefault();
        return;
    }

    if(!email.includes("@")){
        alert("Invalid email format");
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