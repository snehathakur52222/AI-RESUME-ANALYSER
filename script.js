document.getElementById("analyzeBtn")
.addEventListener("click", analyzeResume);

function analyzeResume() {

    let resume =
    document.getElementById("resumeText")
    .value.toLowerCase();

    if (resume === "") {
        alert("Paste your resume first");
        return;
    }

    // Skills list
    let skills = [
        "html",
        "css",
        "javascript",
        "python",
        "sql",
        "github",
        "react"
    ];

    let foundSkills = [];
    let missingSkills = [];

    // Check skills
    for(let i = 0; i < skills.length; i++) {

        if(resume.includes(skills[i])) {
            foundSkills.push(skills[i]);
        }

        else {
            missingSkills.push(skills[i]);
        }
    }

    // Score
    let score =
    foundSkills.length * 10;

    document.getElementById("score")
    .innerText =
    score + "/100";

    // Show found skills
    let skillsList =
    document.getElementById("skillsFound");

    skillsList.innerHTML = "";

    for(let i = 0;
        i < foundSkills.length;
        i++) {

        skillsList.innerHTML +=
        `<li>${foundSkills[i]}</li>`;
    }

    // Show missing skills
    let missingList =
    document.getElementById("missingSkills");

    missingList.innerHTML = "";

    for(let i = 0;
        i < missingSkills.length;
        i++) {

        missingList.innerHTML +=
        `<li>${missingSkills[i]}</li>`;
    }

    // Suggestions
    let suggestion = "";

    if(score < 40) {
        suggestion =
        "Add more technical skills and projects.";
    }

    else if(score < 70) {
        suggestion =
        "Good resume. Add advanced skills.";
    }

    else {
        suggestion =
        "Strong resume!";
    }

    // Fetch API
    fetch(
    "https://api.adviceslip.com/advice"
    )

    .then(function(response){
        return response.json();
    })

    .then(function(data){

        document.getElementById(
        "suggestions"
        ).innerHTML =

        suggestion +
        "<br><br><b>Career Advice:</b> " +
        data.slip.advice;

    });

}