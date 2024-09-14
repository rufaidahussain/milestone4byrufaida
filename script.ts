// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement | null;

    if (form) {
        form.addEventListener('submit', function(event: Event) {
            event.preventDefault();

            // Get form elements with type assertions
            const nameElement = document.getElementById('name') as HTMLInputElement | null;
            const emailElement = document.getElementById('email') as HTMLInputElement | null;
            const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
            const educationElement = document.getElementById('education') as HTMLTextAreaElement | null;
            const experienceElement = document.getElementById('experience') as HTMLTextAreaElement | null;
            const skillsElement = document.getElementById('skills') as HTMLTextAreaElement | null;

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
                    <p><strong>Name:<span contenteditable='true'></strong> ${name}</span></p>
                    <p><strong>Email:<span contenteditable='true'></strong> ${email}</span></p>
                    <p><strong>Phone:<span contenteditable='true'></strong> ${phone}</span></p>
                    
                    <h3>Education</h3>
                    <p span contenteditable='true'>${education}</p>
                    
                    <h3>Experience</h3>
                    <p span contenteditable='true'>${experience}</p>
                    
                    <h3>Skills</h3>
                    <p span contenteditable='true'>${skills}</p>
                `;

                // Display the resume output in the element with id 'resumeOutput'
                const resumeOutputElement = document.getElementById('resumeOutput') as HTMLElement | null;
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
