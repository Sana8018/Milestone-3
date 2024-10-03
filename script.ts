const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement


form.addEventListener('submit' , (event: Event) => {
         event.preventDefault();
         const name = (document.getElementById('name') as HTMLInputElement).value
         const email = (document.getElementById('email') as HTMLInputElement).value
         const phone = (document.getElementById('Phone') as HTMLInputElement).value 
         const education = (document.getElementById('education') as HTMLInputElement).value
         const experience = (document.getElementById('experience') as HTMLInputElement).value
         const skills = (document.getElementById('skills') as HTMLInputElement).value
         
  
         const resumeHTML = `
         <h2><b>Resume<b></h2>
         <h3>Personal Informatin</h3>
         <p><b>Name:</b>${name}</p>
          <p><b>Name:</b>${email}}</p>
           <p><b>Name:</b>${phone}</p>

           <h3>Education</h3>
           <p>${education}</h3>


           <h3>Experience</h3>
           <p>${experience}</h3>

           <h3>Skills</h3>
           <p>${skills}</h3>
        `;

        if (resumeDisplayElement){
            resumeDisplayElement.innerHTML = resumeHTML;
        }else {
            console.error('The resume Display element is missing.')
        }
})