function sendMailTo() {
    let emailValue   = document.getElementById('emailSelector').value;
    let subjectValue = document.getElementById('subject').value;
    let bodyValue    = document.getElementById('mailTextarea').value;
    window.open('mailto:'+emailValue+'?subject='+subjectValue+'&body='+bodyValue);
}