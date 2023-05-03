
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
/*   Object.keys(descriptors.color).forEach(v => {
    const option = document.createElement('option');
    option.innerText = v;
    optionsList.push(option);
  }) */
/*   optionsFragment.append(...optionsList);
  selectElement.append(optionsFragment); */

  selectElement.addEventListener("change", event => {
    emitUIInteraction(descriptors.color[event.target.value]);
  })

  container.append(selectElement);

  // Responses
/*   const responsesElement = document.createElement('div');
  responsesElement.classList.add('responses-block'); */
  
/*   const responsesElementHeader = document.createElement('h4');
  responsesElementHeader.innerText = "Responses:"; */

/*   const responsesElementList = document.createElement('div');
  responsesElementList.setAttribute('id', 'responses-list'); */

/*   responsesElement.append(responsesElementHeader);
  responsesElement.append(responsesElementList);
  container.append(responsesElement); */
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

const descriptors = {
  color: {
    'Black': {
      Change_Attribute_Event: true,
      Attribute_Key: "Color",
      Attribute_Value: "Black",
    },
    'White': {
      Change_Attribute_Event: true,
      Attribute_Key: "Color",
      Attribute_Value: "White",
    },
    'Yellow': {
      Change_Attribute_Event: true,
      Attribute_Key: "Color",
      Attribute_Value: "Metro_Exodus",
    },
    'Metal': {
      Change_Attribute_Event: true,
      Attribute_Key: "Color",
      Attribute_Value: "Metro_Exodus",
    }
  }}


/*   export {
    btn1,
    btn2,
    btn3
  } */

  
let itemBtns = document.querySelectorAll('.item')

let descriptorNames = ["Black", "White", "Yellow"]

itemBtns.forEach((btn, i) => {
  btn.addEventListener('click', (e)=>{handleClick(e, descriptorNames[i])})
})

    
const handleClick = (e, descriptorName) => {
    itemBtns.forEach(btn => {
      btn.classList.remove('clicked')
    })
    e.currentTarget.classList.add('clicked')

    infoBar.textContent = descriptorName;
    emitUIInteraction(descriptors.color[descriptorName])
}