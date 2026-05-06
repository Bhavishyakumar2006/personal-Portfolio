let skillTab = document.querySelector("#skill-tab");
let skillContainer = document.querySelector('#skill-container'); 
let educationTab = document.querySelector('#education-tab'); 
let educationContent = document.querySelector('#education-content');
let hobbyTab = document.querySelector('#hobby-tab');
let hobbyContainer = document.querySelector('#hobby-container');
console.log(skillContainer);

skillTab.addEventListener('click', () =>{
    skillContainer.style.display="block";
    educationContent.style.display="none";
    hobbyContainer.style.display="none";
});
educationTab.addEventListener('click', () =>{
    educationContent.style.display="block";
    skillContainer.style.display="none";
    hobbyContainer.style.display="none";
});
hobbyTab.addEventListener('click', () =>{
    hobbyContainer.style.display="block";
    skillContainer.style.display="none";
    educationContent.style.display="none";
});