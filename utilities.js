
// get ElementText ById 
function getElementTextById(elementId){
    const elementTextStr = document.getElementById(elementId).innerText;
    const elementText = parseFloat(elementTextStr);
    return elementText;

};

// get input value by function  
function getElementValueById (elementId){
    const element = document.getElementById(elementId);
    const elementValueStr = element.value;
    const elementValue = parseFloat(elementValueStr);
    element.value = '';
    return elementValue;
    
}
// set element text by function 
function setElementTextById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
};
