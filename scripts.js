
import { WebRTCClient } from "https://unpkg.com/@arcware/webrtc-plugin@latest/index_new.umd.js";
let emitUIInteraction;

window.addEventListener("load", function () {
  const args = {
    address: "wss://signalling-client.ragnarok.arcware.cloud/",
    packageId: "ff41fd0c-cac9-4e4c-abe5-3ada402f57cc",
    settings: {},
    sizeContainer: "size-container",
    playOverlay: true,
    videoInitializeCallback: appendUI,
    applicationResponse: handleResponse
  };

  this.webrtc = new WebRTCClient(args);
  emitUIInteraction = this.webrtc.emitUIInteraction;
});




// UI
function appendUI () {
  const descriptors = {
    color: {
      'black': {
        Change_Attribute_Event: true,
        Attribute_Key: "Color",
        Attribute_Value: "Black",
      },
      'white': {
        Change_Attribute_Event: true,
        Attribute_Key: "Color",
        Attribute_Value: "White",
      },
      'yellow': {
        Change_Attribute_Event: true,
        Attribute_Key: "Color",
        Attribute_Value: "Metro_Exodus",
      },
      'Metal': {
        Change_Attribute_Event: true,
        Attribute_Key: "Color",
        Attribute_Value: "Metro_Exodus",
      }
    }
  }

  const container = document.querySelector("#size-container > div:first-of-type");

  // Select
  const selectElement = document.createElement('select');
  selectElement.classList.add('select-block')

  const optionsFragment = document.createDocumentFragment();
  const optionsList = [];
  Object.keys(descriptors.color).forEach(v => {
    const option = document.createElement('option');
    option.innerText = v;
    optionsList.push(option);
  })
  optionsFragment.append(...optionsList);
  selectElement.append(optionsFragment);

  selectElement.addEventListener("change", event => {
    emitUIInteraction(descriptors.color[event.target.value]);
  })

  container.append(selectElement);

  // Responses
  const responsesElement = document.createElement('div');
  responsesElement.classList.add('responses-block');
  
  const responsesElementHeader = document.createElement('h4');
  responsesElementHeader.innerText = "Responses:";

  const responsesElementList = document.createElement('div');
  responsesElementList.setAttribute('id', 'responses-list');

  responsesElement.append(responsesElementHeader);
  responsesElement.append(responsesElementList);
  container.append(responsesElement);
}


function handleResponse (message) {
    const responsesListElement = document.querySelector("#responses-list");
    const pElement = document.createElement('p');
    pElement.innerText = message;

    responsesListElement.prepend(pElement);
}


/**************************************************************** */

const allButtons = document.getElementsByClassName("item");
const buttonArray = Array.from(allButtons);
const infoBar = document.getElementById("info_bar")
const mainPage = document.getElementById("body") 

console.log(mainPage);
        
let btn1 = e =>{
  buttonArray.forEach(button => {
    button.classList.remove("clicked");
});

console.log("btn1 pressed");
e.currentTarget.classList.add("clicked")
infoBar.textContent = "Button 1 is active";
}


let btn2 = e =>{
  buttonArray.forEach(button => {
    button.classList.remove("clicked");
});

console.log("btn2 pressed");
e.currentTarget.classList.add("clicked")
infoBar.textContent = "Button 2 is active";
}


let btn3 = e =>{
  buttonArray.forEach(button => {
    button.classList.remove("clicked");
});

console.log("btn3 pressed");
e.currentTarget.classList.add("clicked")
infoBar.textContent = "Button 3 is active";
}


let btn4 = e =>{
  buttonArray.forEach(button => {
    button.classList.remove("clicked");
});

console.log("btn4 pressed");
e.currentTarget.classList.add("clicked")
infoBar.textContent = "Button 4 is active";
}


let btn5 = e =>{
  buttonArray.forEach(button => {
    button.classList.remove("clicked");
});

console.log("btn5 pressed");
e.currentTarget.classList.add("clicked")
infoBar.textContent = "Button 5 is active";
}


let btn6 = e =>{
    // Remove the "clicked" class from all buttons
    buttonArray.forEach(button => {
      button.classList.remove("clicked");
    });
  
    // Add the "clicked" class to the clicked button
    e.currentTarget.classList.add("clicked");
  
    // Update the info bar text
    infoBar.textContent = "Button 6 is active";
  
    // Check if fullscreen mode is enabled
    if (!document.fullscreenElement) {
      // If fullscreen mode is not enabled, request it on the main canvas element
      mainPage.requestFullscreen();
    }
    else
    {
        document.exitFullscreen(); 
    }
  }



/*   export function btnFns ({
    btn1,
    btn2,
    btn3,
    btn4,
    btn5,
    btn6
  }) */


  document.querySelector('#button1').addEventListener('click', btn1)
  document.querySelector('#button2').addEventListener('click', btn2)
  document.querySelector('#button3').addEventListener('click', btn3)
  document.querySelector('#button4').addEventListener('click', btn4)
  document.querySelector('#button5').addEventListener('click', btn5)
  document.querySelector('#button6').addEventListener('click', btn6)