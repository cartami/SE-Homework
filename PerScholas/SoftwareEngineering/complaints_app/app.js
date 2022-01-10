let boroughButtons = document.querySelectorAll('button');
const numComplaintsInput = document.querySelector("input");
const container = document.querySelector("div");
//const APP_TOKEN = 'ftgnixnBdo5xtBRUllD71Awgl';

//use div blocks to make complaints from each borough appear vertically
const buttonTemplate = ( complaint_type,resolution_description, unique_key) => 
  {
    return `<div>${complaint_type}<button type="button" id='${unique_key}' onclick="innerParagraph('${resolution_description}','${unique_key}')">WHAT DID THE POLICE DO</button><p id='${unique_key}'></p></div>`
  }
  
  //create new paragraph showing resolution_description from the object in the JSON payload
const innerParagraph = (resolution_description,unique_key) => {
  const parentElement = document.querySelector('.container');
  let allChildren = parentElement.querySelectorAll(":scope > div > p");
  console.log(allChildren);
  allChildren.forEach(item => {
    //this last part was the hardest to figure out for some reason 
    if(item.id === unique_key)
    item.innerHTML = resolution_description
  });
}

//render each oject item in the array to ther view
const render = data => {
  data.forEach(ele => {
        //try adding querySelector all for all buttons maybe
        document.querySelector("div").innerHTML += buttonTemplate(ele.complaint_type, ele.resolution_description, ele.unique_key) //apend to the div
    });
}

//clear past div container 
const clearContainer = () => {
    document.querySelector("div").innerHTML = "";
}

//iterate through the nodelist from querySelectorAll buttons and assign an EventListener to each button
Array.from(boroughButtons).forEach(boroughButton => {
  boroughButton.addEventListener('click', () => {
    
    let borough = boroughButton.value; //extract the borough value from button selected
  
    let numComplaints = numComplaintsInput.value; // extracting the value out of complaint number input
       let numComplaintsDefault = 10;
  
       if(numComplaints) numComplaintsDefault = numComplaints;
    //URL string used to make GET call using filter parameters
    const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${borough}&agency=NYPD&$limit=${numComplaintsDefault}`
  
    //JS has a built in method for API calls
    // which is promise based
    fetch(url)
      .then((res)=> res.json() )// receives the response from the promise
      .then((data) => {
  
       let jsonData = JSON.stringify(data); //parse body into string
       clearContainer(); //clear the past view
       render(data);
        
      })
      .catch((error) => {
      console.log(error)
    })
   });
});
