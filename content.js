// content.js
//this script is embedded into the active tab.
//this script executes on active tab's context.
//this script can send/receive messages to extension's script i.e popup.js

function colorText() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, dd, dt, a');
  
    textElements.forEach(element => {
      const text = element.textContent.trim();
  
      // Split text into an array of individual letters
      const letters = text.split('');
  
      // Loop through the letters and wrap them in a span element
      const coloredLetters = letters.map((letter, index) => {
        const color = index % 2 === 0 ? 'red' : '#00ff00';
        return `<span style="color:${color}">${letter}</span>`;
      });
  

      element.innerHTML = coloredLetters.join('');
      // Replace the original text with the colored text
      //element.innerHTML = '<b>' + coloredLetters.join('') + '</b>';
    });
  }
  

colorText();


//Add a listener which listens to a message, in this case a json object
//based on the message, we execute some functions on the current tab
/*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'colorText') {
    colorText();
  }
});
 */ 