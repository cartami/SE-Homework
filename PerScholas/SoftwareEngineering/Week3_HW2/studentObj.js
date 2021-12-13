/**
 * Filter student objs based on activity
 */
 function filterByActivity(arr, query) {
    return arr.filter(function(element) {
      return element.activity.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  }
  
let studentObjs = [
    {name:'trueman',activity:'swimming', gender: 'male'},
    {name:'xaiver',activity:'basketball', gender: 'female'},
    {name:'randy',activity:'climbing', gender: 'male'}, 
    {name:'brenda',activity:'swimming', gender: 'female'},
    {name:'monica',activity:'basketball', gender: 'female'}
];

console.log(filterByActivity(studentObjs, 'basketball'))  // ['basketball', 'swimming']