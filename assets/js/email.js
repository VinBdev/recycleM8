function sendMail(contactForm) {
    emailjs.send("service_fuvx6ut", "RecycleM8", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;   
}

$('button-a').click(function(){
    swal({
      title:"confirm",
      text:"Are you sure?",
      buttons: {
        cancel:true,
        confirm: "Submit"
      }
    })
  });