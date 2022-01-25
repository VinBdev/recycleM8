function sendMail(contactForm) {
    emailjs.send("service_fuvx6ut", "RecycleM8", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            if(document.getElementById('button').clicked == true)
{
   alert("button was clicked");
}
        
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;   
};

function sweetAlertClick(){
    Swal.fire({
        title: 'Custom animation with Animate.css',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
}