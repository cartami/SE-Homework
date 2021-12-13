/**
 * Filter student objs based on activity
 */
 function filterByActivity(arr, query) {
    return arr.filter(function(element) {
      return element.activity.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  }
  
let student = [
    {name:'trueman',activity:'swimming', gender: 'male'},
    {name:'xaiver',activity:'basketball', gender: 'female'},
    {name:'randy',activity:'climbing', gender: 'male'}, 
    {name:'brenda',activity:'swimming', gender: 'female'},
    {name:'monica',activity:'basketball', gender: 'female'}
];

let studentObjsOutput = `studentObjs: ' ${JSON.stringify(student)}'`
document.getElementById('studentObjs').innerHTML= studentObjsOutput;
//stringify array of objects
let studentOutput = `studentObjs that have swimming: ' ${JSON.stringify(filterByActivity(student, 'basketball'))}'`
document.getElementById('studentObjsWithSwimming').innerHTML= studentOutput;