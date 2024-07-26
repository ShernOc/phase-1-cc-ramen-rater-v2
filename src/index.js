// index.js

// Fetching the API
const ramenAPI = 'http://localhost:3000/'; 

fetch(ramenAPI)
.then(res=>res.json())
.then(ramens=>renderRamen(ramens));
// .then(renderRamens)

// Function that shows all the Ramens // using for Each to go through each ramen data 

function renderRamens(ramens){
ramens.forEach(renderRamen); 
}

// We are working on div #ramen-menu, where the images will be created and appended to the div ramen-menu . 1. you grab it, 2. 

// 1. Grabing the div id ramen-menu 
const ramenMenu = document.getElementById('ramen-menu'); 

function renderRamen(ramens){
  const ramenPic = document.createElement('img'); 
  ramenPic.src = ramens.image; 
  ramenMenu.append(ramenPic);
}

// // Callbacks
// const handleClick = (ramen) => {
//   // Add code
// };

// const addSubmitListener = () => {
//   // Add code
// }

// const displayRamens = () => {
//   // Add code
// };

// const main = () => {
//   // Invoke displayRamens here
//   // Invoke addSubmitListener here
// }

// main()

// // Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };
