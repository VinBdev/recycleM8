function sendMail(contactForm) {
    emailjs.send("service_fuvx6ut", "RecycleM8", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            if(document.getElementById('button-a').clicked == true)
{
   alert("button was clicked");
}

},
function(error) {
    console.log("FAILED", error);
}
);
return false;    }