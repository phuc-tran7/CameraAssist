
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
// settingMap.set("sunnyfastshallow", "Typically, sunny conditions do not require a high ISO (artificial light) because there is typically MORE than enough light. An object that is moving FAST requires a shutterspeed of atleast 1/500. For example, a runner would probably require a shuter of atlest 1/500 to freeze most of the motion. Keep in mind however, sometimes a tiny bit of motion blur is OKAY to portray the object is moving. Keep in mind, less light will be let in as the shutter speed gets faster. As for depth of field, a wider aperature (closer to f/2.8) allows for blurry a background. Finally, in this situation, there is an ADBUNDANCE of light, so to prevent overexposure, keep ISO low and either increase shutterspeed or choose a higher aperture");
// settingMap.set("sunnyfastdeep", "Typically, sunny conditions do not require a high ISO (artificial light) because there is typically MORE than enough light. An object that is moving FAST requires a shutterspeed of atleast 1/500. For example, a runner would probably require a shuter of atlest 1/500 to freeze most of the motion. Keep in mind however, sometimes a tiny bit of motion blur is OKAY to portray the object is moving. Keep in mind, less light will be let in as the shutter speed gets faster. As for depth of field, a less wide aperature (closer to f/16) allows for everything in the image to be in focus. Keep in mind, a narrower aperture lets in A LOT less light. To compensate, consider lower the shutter speed. Typically, increasing ISO is unecessary." );
// settingMap.set("sunnyfastmiddle", "")
// settingMap.set("sunnyfastmiddle", "")

const weatherConditions = ["sunny", "partly cloudy", "overcast", "golden hour", "blue hour", "night"];
const speedConditions = ["fast", "medium", "slow", "none"];
const depthConditions = ["shallow", "deep", "middle"];

weatherConditions.forEach(weather => {
    speedConditions.forEach(speed => {
        depthConditions.forEach(depth => {
            const key = `${weather}${speed}${depth}`;
            let description = "";
            
            if (weather === "sunny") {
                description += "Sunny conditions provide ample natural light, reducing the need for a high ISO. ";
            } else if (weather === "partly cloudy") {
                description += "Partly cloudy conditions introduce variable lighting, requiring adjustments to ISO and shutter speed. ";
            } else if (weather === "overcast") {
                description += "Overcast skies create diffuse light but may need a moderate ISO increase for proper exposure. ";
            } else if (weather === "golden hour") {
                description += "Golden hour provides warm, soft light, great for creative effects. ";
            } else if (weather === "blue hour") {
                description += "Blue hour offers cool, low light; a tripod and higher ISO may be necessary. ";
            } else if (weather === "night") {
                description += "Nighttime requires long exposures, higher ISO, and a stable tripod. ";
            }

            if (speed === "fast") {
                description += "Fast-moving subjects require a shutter speed of at least 1/500 to freeze action. ";
            } else if (speed === "medium") {
                description += "Moderate-speed subjects benefit from a shutter speed of 1/250 to balance motion blur and sharpness. ";
            } else if (speed === "slow") {
                description += "Slow-moving subjects work well with shutter speeds of 1/125 or slower. ";
            } else if (speed === "none") {
                description += "Stationary subjects allow for very slow shutter speeds or long exposures. ";
            }

            if (depth === "shallow") {
                description += "A wide aperture (e.g., f/2.8) creates a shallow depth of field, making the background blurry. ";
            } else if (depth === "deep") {
                description += "A narrow aperture (e.g., f/16) creates a deep depth of field, keeping the entire scene in focus. ";
            } else if (depth === "middle") {
                description += "A moderate aperture (e.g., f/8) balances subject focus and background sharpness. ";
            }

            description += "Adjust ISO, shutter speed, and aperture based on lighting conditions to avoid over- or underexposure.";
            settingMap.set(key, description);
        });
    });
});









