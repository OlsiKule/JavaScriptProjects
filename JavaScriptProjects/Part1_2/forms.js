const wes = document.querySelector('.wes');

wes.addEventListener('click', function (event) {
  const shouldChangePage = confirm(
    "The website you're about to go to is bullshit and full of malware. Do you wish to proceed?"
  );
  if (!shouldChangePage) {
    // handy for preventing default from happening especially with forms
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');
// now we listen for a submit event
signupForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // to grab elements inside a form we can do the following console.logs targeting the ID
  // console.log(event.currentTarget.name.value)
  // console.log(event.currentTarget.email.value)
  // console.log(event.currentTarget.agree.checked)
  const name = event.currentTarget.name.value;
    // includes is not case sensitive othewise use regex
  if (name.includes('chad')) {
    alert(
      "sorry bro, your name does not qualify for the best possible present there's"
    );
    event.preventDefault();
  }
});

function logEvent(event){
    console.log(event.type)
    console.log(event.currentTarget.value)

}
signupForm.addEventListener("keyup", logEvent)
signupForm.addEventListener("keydown", logEvent)
signupForm.addEventListener("focus", logEvent)
signupForm.addEventListener("blur", logEvent)
// other type of events with form imputs 
// keyup, keydown, focus, blur 
