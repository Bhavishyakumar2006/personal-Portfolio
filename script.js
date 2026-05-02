let skillTab = document.querySelector("#skill-tab");
let skillContainer = document.querySelector('#skill-container'); 
let educationTab = document.querySelector('#education-tab'); 
let educationContent = document.querySelector('#education-content');
console.log(skillContainer);

skillTab.addEventListener('click', () =>{
    skillContainer.style.display="block";
    educationContent.style.display="none";
});
educationTab.addEventListener('click', () =>{
    skillContainer.style.display="none";
    educationContent.style.display="block";
    
})