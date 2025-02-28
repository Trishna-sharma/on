window.addEventListener("scroll", function() {
    let shortTextElement = document.querySelector(".short-text");
    let longTextElement = document.querySelector(".long-text");
    let myField = document.getElementById("my_field");  // Make sure myField is selected
    let infoCard = document.getElementById("info_card");

    let subjectBoxes = document.querySelectorAll(".subject-box");

    
   
    let scrollPosition = window.scrollY ; 

    // Handle short-text and long-text visibility based on scroll position
    if (scrollPosition > 100) {
        if (shortTextElement.style.display !== "none") {
            shortTextElement.style.animation = "fadeOut 0.5s ease-in-out forwards"; // Fade-out short text
            setTimeout(function() {
                shortTextElement.style.display = "none";  // Hide short text
                longTextElement.style.display = "inline";  // Show long text
                longTextElement.style.animation = "fadeIn 0.5s ease-in-out forwards"; // Fade-in long text
            }, 500);  // Wait for fade-out to complete
        }
    } else {
        if (longTextElement.style.display !== "none") {
            longTextElement.style.animation = "fadeOut 0.5s ease-in-out forwards"; // Fade-out long text
            setTimeout(function() {
                longTextElement.style.display = "none";  // Hide long text
                shortTextElement.style.display = "inline";  // Show short text
                shortTextElement.style.animation = "fadeIn 0.5s ease-in-out forwards"; // Fade-in short text
            }, 500);  // Wait for fade-out to complete
        }
    }

    
    // Handle visibility of my_field based on scroll position, similar to short-text and long-text logic
    if (scrollPosition > 1300) { // Change the scroll position threshold as needed
        if (myField.style.display !== "block") {
            myField.style.animation = "fadeIn 0.5s ease-in-out forwards"; // Fade-in my_field
            setTimeout(function() {
                myField.style.display = "block"; // Make the element visible
            }, 500);  // Wait for fade-in to complete
        }
    } else {
        if (myField.style.display !== "none") {
            myField.style.animation = "fadeOut 0.5s ease-in-out forwards"; // Fade-out my_field
            setTimeout(function() {
                myField.style.display = "none"; // Hide the element
            }, 500);  // Wait for fade-out to complete
        }
    }

    
    if (scrollPosition > 2500) {
        infoCard.classList.add("visible");
    } else {
        infoCard.classList.remove("visible");
    }


    

    

    if (window.scrollY >= 3000) {
        subjectBoxes.forEach(function (box) {
            let boxPosition = box.offsetTop; // Get the position of each box

            if (scrollPosition > boxPosition + 50) { // If box is in the viewport
                box.classList.add("visible");
            } else {
                box.classList.remove("visible"); // Hide again if scrolled up
            }
        });
    } else {
        // If scroll is less than 3000px, keep all boxes hidden
        subjectBoxes.forEach(function (box) {
            box.classList.remove("visible");
        });
    }


   

  // When a subject box is clicked, open the overlay
document.querySelectorAll(".subject-box").forEach(function (subject) {
    subject.addEventListener("click", function () {
        let loadingSpinner = document.getElementById("loading-spinner");

        // Show the spinner
        loadingSpinner.style.display = "block";

        // Hide spinner after 0.5s and show overlay
        setTimeout(() => {
            loadingSpinner.style.display = "none";
            document.getElementById("overlay").style.display = "flex"; // Now it appears after the animation
        }, 900);

        let subjectId = subject.id;
        let projectDetails = document.getElementById("project-details");
    
        // Dynamically change content based on subject clicked
        switch (subjectId) {
            case "subject1":
                projectDetails.innerHTML = `
                    <h1>Code Lab-1</h1>
                    <h4>Project 1: Skills Portfolio (C++)</h4>
                    <p>Project 1 A wide ranged c++ exercises were executed </p>
                    <a href="https://drive.google.com/drive/u/0/folders/1Ow_uhaZhgG6MBBPyF_gKsnp70x68eH_x" target="_blank">Go to Project</a>
                    <h4>Project 2: Vending Machine (C++) </h4>
                    <p>Project 2 A vending machine was designed with the learned c++ knowledge </p>
                    <a href="https://drive.google.com/drive/u/0/folders/1jFChFkVsM7ka-O9LhParuqScDkpvXxvZ" target="_blank">Go to project</a>
                `;
                break;
        
            case "subject2":
                projectDetails.innerHTML = `
                    <h1>Digital Storytelling</h1>
                    <h4>Project 1: Twine Interactive Story</h4>
                    <p>Project 1: A Digital interactive story was created </p>
                    <a href="https://drive.google.com/drive/u/0/folders/1oIh0350xUYH9MoWkFRiMmetASm6QLFun" target="_blank">Go to Project</a>
                    <h4>Project 2: Digital Storytelling Portfolio</h4>
                    <p>Project 2 A creative artifact was tried to be produced </p>
                    <a href="https://sway.cloud.microsoft/ssY8ADCdBtU07EnF?ref=Link" target="_blank">Go to project</a>
                `;
                break;
        
            case "subject3":
                projectDetails.innerHTML = `
                    <h1>Experience Design</h1>
                    <h4>Project 1: UX/UI Portfolio</h4>
                    <p>Project 1: A complete portfolio Design of a UX/UI layout with Low and high fidelity structure and much more  </p>
                    <a href="https://sway.cloud.microsoft/RIrm8pfMugobH0V4?ref=Link" target="_blank">Go to Project</a>
        
                `;
                break;
        
    
        
            case "subject4":
                projectDetails.innerHTML = `
                    <h1>Web Development</h1>
                    <h4>Project 1: Skills Portfolio</h4>
                    <p>Project 1: Created a exercises portfolio website using HTML, CSS, and JavaScript.</p>
                    <a href="https://github.com/SkillsPortfolioWebDevelopment/skillsportfolioexercises-Trishna-sharma" target="_blank">Go to Project</a>
                    <h4>Project 2: Online Portfolio(personal)</h4>
                    <p>Project 2: Developed a small personal portfolio.</p>
                    <a href="https://github.com/SkillsPortfolioWebDevelopment/skillsportfolioexercises-Trishna-sharma/tree/main/Assessment%202" target="_blank">Go to project</a>
                `;
                break;
        
            case "subject5":
                projectDetails.innerHTML = `
                    <h1>Code Lab-2</h1>
                    <h4>Project 1: Skills Portfolio (Python)</h4>
                    <p>Project 1: Worked on python exercises .</p>
                    <a href="https://drive.google.com/drive/u/0/folders/18X6OdM6XVCodPvnbXmCXfjDSmIOsRKxA" target="_blank">Go to Project</a>
                    <h4>Project 2: HUI app and Data Structures Implementation (Python)</h4>
                    <p>Project 2: Implemented overall python learnings and libraries and gui interface to build the app.</p>
                    <a href="https://drive.google.com/drive/u/0/folders/18ZZMFwRQYElgiSAM-TJNbTyuUKl80109" target="_blank">Go to project</a>
                `;
                break;
        
            case "subject6":
                projectDetails.innerHTML = `
                    <h1>Games Development</h1>
                    <h4>Project 1: Reviewed a game </h4>
                    <p>Project 1: Reviewed a game to understand how a game works and understood the basic criterias.</p>
                    <a href="https://drive.google.com/drive/u/0/folders/18mCR9GVxic3E9XqjhT7aP2tRGFkH0jx8" target="_blank">Go to Project</a>
                    <h4>Project 2: 2D game development </h4>
                    <p>Project 2: Developed a 2D game using the Unity</p>
                    <a href="https://drive.google.com/drive/u/0/folders/18y60FW04Iv4XtTNKne8oYjkuFtQLNqNF" target="_blank">Go to project</a>
                `;
                break;
        
            case "subject7":
                projectDetails.innerHTML = `
                    <h1>Responsive Web</h1>
                    <h4>Project 1: Clone Task</h4>
                    <p>Project 1: Executed 3 tasks to completely understand how the responsiveness worked</p>
                    <a href="https://github.com/Trishna-sharma/clone-tasks" target="_blank">Go to Project</a>
                    <h4>Project 2: Multi Device Application</h4>
                    <p>Project 2: Implemented advanced media queries for responsive layouts and created a multi device website.</p>
                    <a href="https://drive.google.com/drive/u/0/folders/1G7HGnatz35dQNl2sr78Q5ZTqijjSH0aG" target="_blank">Go to project</a>
                `;
                break;
        
            case "subject8":
                projectDetails.innerHTML = `
                    <h1>Creative Industry Challenge</h1>
                    <h4>Project 1: Challange Portfolio</h4>
                    <p>Project 1: Went to a Business holder and offered them a co-op service creation </p>
                    <a href="https://drive.google.com/drive/u/0/folders/1RUpkYzdeKDdmzmXo1ntbda_OeIWZ-Vpx" target="_blank">Go to Project</a>
                    
                `;
                break;
        
            case "subject9":
                projectDetails.innerHTML = `
                    <h1>Emerging Technologies</h1>
                    <h4>Project 1: Visualization creation</h4>
                    <p>Project 1: Created 5 visualization of data structures</p>
                    <a href="https://drive.google.com/file/d/1gmE6iHSZeQiEeIF21Vi7OdkCQ9IkwYKv/view?usp=sharing" target="_blank">Go to Project</a>
                    <h4>Project 2: Chatbot creation</h4>
                    <p>Project 2: Built a Basic Chatbot.</p>
                    <a href="https://drive.google.com/drive/u/0/folders/1q47w4R_SVUyaj5P6zpfL6CJppgSV3hse" target="_blank">Go to project</a>
                `;
                break;
        
            case "subject10":
                projectDetails.innerHTML = `
                    <h1>Smartphone Apps</h1>
                    <h4>Project 1: App Review</h4>
                    <p>Project 1: Reviewed an application to understand the core of the designs</p>
                    <a href="https://drive.google.com/drive/u/0/folders/18Ttz-gg6CUZ0ncGQN2jh-UDcmmEeTOeH" target="_blank">Go to Project</a>
                    <h4>Project 2: 2 Working Apps</h4>
                    <p>Project 2: Built 2 full fledged working applications , using Android Studio</p>
                    <a href="https://drive.google.com/drive/u/0/folders/18UGcr0w3Z3JXFMR5OPTeW_LQWz3MZyeH" target="_blank">Go to project</a>
                `;
                break;
        
            case "subject11":
                projectDetails.innerHTML = `
                    <h1>Machine Learning</h1>
                    <h4>Project 1: Predictive Model for Stock Prices</h4>
                    <p>Project 1: Developed a model to predict stock prices using machine learning algorithms.</p>
                    <a href="https://drive.google.com/drive/u/0/folders/1_vVwAYjRPwvYNFjl3v9NtwA21kvIWXiN" target="_blank">Go to Project</a>
                    <h4>Project 2: Classification of Customer Churn</h4>
                    <p>Project 2: Built a classification model to predict customer churn in a subscription-based service.</p>
                    <a href="https://drive.google.com/drive/u/0/folders/1y6uD6g0EG0wpitVOpix_H02vDP2gXLco" target="_blank">Go to project</a>
                `;
                break;
        
            case "subject12":
                projectDetails.innerHTML = `
                    <h1>Research Project</h1>
                    <h4>Project 1: Data Cleaning for Customer Dataset</h4>
                    <p>Project 1: Performed data cleaning and pre-processing for a customer dataset.</p>
                    <a href="https://drive.google.com/drive/u/0/folders/1yTgiRf6fTa5-REoC_zLU_8a1kGV4xXnG" target="_blank">Go to Project</a>
                    <h4>Project 2: Predictive Analysis for Retail Business</h4>
                    <p>Project 2: Developed a predictive model for retail sales forecasting.</p>
                    <a href="https://drive.google.com/drive/u/0/folders/1VXUUGYq-w8vwLfMNtSyfMZn-Qz8-f7rN" target="_blank">Go to project</a>
                `;
                break;
        
            case "subject13":
                projectDetails.innerHTML = `
                    <h1>Physical Computing</h1>
                    <h4>Project 1: Physical computing portfolio</h4>
                    <p>Project 1: Built a portfolio with 6 individual projects and 1 final group project</p>
                    <a href=" " target="_blank">Go to Project</a>
                  
                `;
                break;
            case "subject14":
                 projectDetails.innerHTML = `
                    <h1>Cybersecurity</h1>
                    <h4>Project 1: Costed Plan</h4>
                    <p>Project 1: Developed a document , understanding how cyber security worked in an organizatiion, with thorough interviewing officer.</p>
                    <a href="https://docs.google.com/document/d/1i_6QcjswXQNagWtUNfwdBdj1VXaoNEfT/edit?usp=sharing&ouid=104017619782090653134&rtpof=true&sd=true" target="_blank">Go to Project</a>
                    <h4>Project 2: Forensic Investigation</h4>
                    <p>Project 2: Analyzed and investigated a forensic file in order to understand how the investigation is done </p>
                    <a href="https://docs.google.com/document/d/1WqeShfW48RceiiJTxCvDNfbwMYPYloj4/edit?usp=sharing&ouid=104017619782090653134&rtpof=true&sd=true" target="_blank">Go to project</a>
                `;
                break;
            
            case "subject15":
                projectDetails.innerHTML = `
                    <h1>Creative incubator</h1>
                    <h4>Project 1: Online Portfolio and CV </h4>
                    <p>Project 1: Created a CV and documented all the skills learnt so far</p>
                    <a href="" target="_blank">Go to Project</a>
                    <h4>Project 2: Business proposal</h4>
                    <p>Project 2: Worked in a group to create a product thats ready to launch digitally.</p>
                    <a href="" target="_blank">Go to project</a>
                `;
                break;
            
            case "subject16":
                projectDetails.innerHTML = `
                    <h1>Tommorow's web</h1>
                    <h4>Project 1: A complete front end and back end website (Individual ) using Node.js and Mongo DB</h4>
                    <p>Project 1: Developed a full-fledged front end and back end channel individually.</p>
                    <a href=" " target="_blank">Go to Project</a>
                    
                `;
                break;
        

            default:
                projectDetails.innerHTML = `<p>No details available for this subject.</p>`;
               break;
        }        
        
    })     

    const formCard = document.getElementById('formCard');
        
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            
            if (scrollPosition > 4500) {
                formCard.classList.add("visible");
            } else {
                formCard.classList.remove("visible");
            }
        });

    
        
    
    
    
    document.getElementById("close-btn").addEventListener("click", function () {
        document.getElementById("overlay").style.display = "none"; // Hide overlay when close button is clicked
    });

})})

