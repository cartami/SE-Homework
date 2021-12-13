//array Destructuring 
[a,b, ...rest] = ["Henry", "Brian", "Fred"]

//objects
const person = {
    fname: "barry",
    lname: "juice",

    fullName :  ()=>{
        console.log(fname + lname) 
    }
}