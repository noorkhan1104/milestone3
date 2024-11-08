// get reference to the form display area
const Form = document.getElementById('resume-form') as HTMLFormElement;
const ResumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;


Form.addEventListener ('submit' , (event: Event ) => {
       event.preventDefault();

       //collect input values
       const name=(document.getElementById('name')as HTMLInputElement).value
       const email=(document.getElementById('email')as HTMLInputElement).value
       const phone=(document.getElementById('tel')as HTMLInputElement).value
       const education=(document.getElementById('education')as HTMLInputElement).value
       const experience=(document.getElementById('experience')as HTMLInputElement).value
       const skills=(document.getElementById('skills')as HTMLInputElement).value
 
       //generate the resume content dynamically
  const  resumeHTML = `
  <h2><b> Editable Resume<b></h2>
  <h3>Personal Information</h3>
  <p><b>Name:</b><span contenteditable="true">${name}</span></p>
  <p><b>Email:</b><span contenteditable="true">${email}</span></p>
  <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

  <h3>Education</h3>
  <p contenteditable="true">${education}</p>

 <h3>Experience</h3>
  <pcontenteditable="true">${experience}</p>

 <h3>Skills</h3>
  <pcontenteditable="true">${skills}</p>
   `;

  if (resumeDisplayElement){
    resumeDisplayElement.innerHTML =resumeHTML;
  } else {
    console.error('The Resume Display Element Is Missing');
  }
});