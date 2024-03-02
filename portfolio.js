//Changing text of the I am a... sectionlet IntervalId = setInterval(changeText, 5000);
let currentText = 0;
let careertext = ["Developer", "Ideator", "Innovator", "Problem Solver", "Designer", "Illustrator", "Creator"]
function changeText(){
    let career = document.getElementById('career');
    career.textContent = careertext[currentText];
    currentText = (currentText + 1) % careertext.length; //Increment index and increase texts
}

function startInterval(){
    IntervalId = setInterval(changeText, 1000);
};

function stopInterval(){
    clearInterval(IntervalId);
}

