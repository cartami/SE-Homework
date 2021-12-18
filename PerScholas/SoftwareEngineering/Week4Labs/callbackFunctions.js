

hokiePokie = (callbackFunction) =>{
    console.log("Put your left foot in") //do a thing
    console.log("Take your left foot out") //do a thing
    console.log("Put your left foot in") //do another thing
    callbackFunction() // now, do this function
    console.log("Ya do the hokie pokie and you turn yourself around") //ok, now get back to our thing
    console.log("That's what it's all about") // let's wrap this up
}
whatsNext = () =>{
    console.log("oh... my turn... And ya shake it all about")
}

hokiePokie(whatsNext)

const lyrics = ["Ya put your left foot in", "Ya take your left foot out", 
"Ya put your left foot in and ya shake it all about", "Ya do the Hokie Pokie and you turn yourself about", 
"That's what it's all about", "Hokie Pokie!!!"]

const displayIt = (value) =>{
    document.getElementById('test').innerHTML = value
}

setTimeout(() => {displayIt(lyrics[0])}, 3000);
setTimeout(() => {displayIt(lyrics[1])}, 5000);
setTimeout(() => {displayIt(lyrics[2])}, 7000);
setTimeout(() => {displayIt(lyrics[3])}, 9000);
setTimeout(() => {displayIt(lyrics[4])}, 11000);
setTimeout(() => {displayIt(lyrics[5])}, 13000);
setTimeout(() => {displayIt("See what I did there?")}, 15000);





