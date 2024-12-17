
let lightInput;
let speedInput;
let depthInput;
let total = localStorage.getItem("total") || ""; 
localStorage.removeItem("total");

const settingMap = new Map();

const question = document.getElementById("questionText");

function firstClick() {

lightInput = document.getElementById("Input").value.trim().toLowerCase();



const validConditions = ["sunny", "partly cloudy", "overcast", "golden hour", "blue hour", "night"];

if (validConditions.includes(lightInput)) {
   total+=lightInput;
   localStorage.setItem("total", total);
    window.location.href = "optionsTwo.html"; 
} else {
    // Notify the user if the light condition input is invalid
    question.innerHTML = "Please enter a valid light condition (sunny, partly cloudy, overcast, golden hour, blue hour, night";
}

}

function secondClick() {

    speedInput = document.getElementById("Input").value.trim().toLowerCase();
    
    
    
    const validConditions = ["fast", "medium", "slow", "none"];
    
    if (validConditions.includes(speedInput)) {
        total+=speedInput+"";
        localStorage.setItem("total", total);
        window.location.href = "optionsThree.html"; 
    } else {
        // Notify the user if the light condition input is invalid
        question.innerHTML = "Please enter a valid motion condition (fast, medium, slow, none)";
    }
    
    }
function thirdClick(){


    depthInput = document.getElementById("Input").value.trim().toLowerCase();
    
    
    
    const validConditions = ["shallow", "deep", "middle"];
    
    if (validConditions.includes(depthInput)) {
        total+= depthInput+"";
        localStorage.setItem("total", total);
        window.location.href = "output.html"; 
    } else {
        // Notify the user if the light condition input is invalid
        question.innerHTML = "Please enter a valid depth of field (shallow, deep, or middle)";
    }


}


function resultClick(){
    const temp = settingMap.get(total) || "Result not found.";
    const resultContainer = document.getElementById("result");
    let index = 0;

    // Clear any previous content in the result container
    resultContainer.textContent = "";

    // Typing effect using setInterval
    const typingInterval = setInterval(() => {
        // Add one character at a time from temp to resultContainer
        resultContainer.textContent += temp[index];
        index++;

        // Stop the interval when all characters are displayed
        if (index === temp.length) {
            clearInterval(typingInterval);
        }
    }, 40);
}

/**************Hash map dictionary thing */

/*sunny*/
settingMap.set("sunnyfastshallow", "Typically, sunny conditions do not require a high ISO (artificial light) because there is typically MORE than enough light. An object that is moving FAST requires a shutterspeed of atleast 1/500. For example, a runner would probably require a shuter of atlest 1/500 to freeze most of the motion. Keep in mind however, sometimes a tiny bit of motion blur is OKAY to portray the object is moving. Keep in mind, less light will be let in as the shutter speed gets faster. As for depth of field, a wider aperature (closer to f/2.8) allows for blurry a background. Finally, in this situation, there is an ADBUNDANCE of light, so to prevent overexposure, keep ISO low and either increase shutterspeed or choose a higher aperture");
settingMap.set("sunnyfastdeep", "Typically, sunny conditions do not require a high ISO (artificial light) because there is typically MORE than enough light. An object that is moving FAST requires a shutterspeed of atleast 1/500. For example, a runner would probably require a shuter of atlest 1/500 to freeze most of the motion. Keep in mind however, sometimes a tiny bit of motion blur is OKAY to portray the object is moving. Keep in mind, less light will be let in as the shutter speed gets faster. As for depth of field, a less wide aperature (closer to f/16) allows for everything in the image to be in focus. Keep in mind, a narrower aperture lets in A LOT less light. To compensate, consider lower the shutter speed. Typically, increasing ISO is unecessary." );











