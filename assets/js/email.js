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
    function sweetAlertClick(){
        Swal.fire({
            title: 'Your message was successful!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
    }
}
        
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;   
};

