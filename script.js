// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form elements
            const nameElement = document.getElementById('name');
            const emailElement = document.getElementById('email');
            const phoneElement = document.getElementById('phone');
            const educationElement = document.getElementById('education');
            const experienceElement = document.getElementById('experience');
            const skillsElement = document.getElementById('skills');

            if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
                // Retrieve values from form elements
                const name = nameElement.value;
                const email = emailElement.value;
                const phone = phoneElement.value;
                const education = educationElement.value;
                const experience = experienceElement.value;
                const skills = skillsElement.value;

                // Create resume output
                const resumeOutput = `
                    <h2>Resume</h2>
                    <p><strong>Name:<span contenteditable='true'></span></strong> ${name}</p>
                    <p><strong>Email:<span contenteditable='true'></span></strong> ${email}</p>
                    <p><strong>Phone:<span contenteditable='true'></span></strong> ${phone}</p>
                    
                    <h3>Education</h3>
                    <p contenteditable='true'>${education}</p>
                    
                    <h3>Experience</h3>
                    <p contenteditable='true'>${experience}</p>
                    
                    <h3>Skills</h3>
                    <p contenteditable='true'>${skills}</p>
                `;

                // Display the resume output in the element with id 'resumeOutput'
                const resumeOutputElement = document.getElementById('resumeOutput');
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput;
                } else {
                    console.error('The resume output element is missing');
                }
            } else {
                console.error('One or more form elements are missing');
            }
        });
    } else {
        console.error('The form element is missing');
    }
});
