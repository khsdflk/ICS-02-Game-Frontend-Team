// This is the entrypoint file that ties every other file together, and calls the initial modules

// Run the socket module to establish a connection with the server
import './socket/socket.js'

/* Create the login dialogue splash screen. For DEVELOPMENT purposes, you can comment this import line out and instead import any other pages you want to run. For example, to instead initialize the canvas testing page, comment out the line below and uncomment the other two lines */

// import './pages/loginDialogue.js'


// Import login dialoguie
// import loginDialogue from './pages/loginDialogue.js'
// loginDialogue(); 




// // Load customization screen
// import customization from './pages/customization.js'
// customization(); 

// // Import menu function
 import menu from './pages/menu.js'
 menu();



// import initGame from './game/initGame.js';
// initGame();