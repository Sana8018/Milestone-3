var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('Phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n         <h2><b>Resume<b></h2>\n         <h3>Personal Informatin</h3>\n         <p><b>Name:</b>".concat(name, "</p>\n          <p><b>Name:</b>").concat(email, "}</p>\n           <p><b>Name:</b>").concat(phone, "</p>\n\n           <h3>Education</h3>\n           <p>").concat(education, "</h3>\n\n\n           <h3>Experience</h3>\n           <p>").concat(experience, "</h3>\n\n           <h3>Skills</h3>\n           <p>").concat(skills, "</h3>\n        ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume Display element is missing.');
    }
});
