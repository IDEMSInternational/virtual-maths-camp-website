//id of each image that will be used 
//to select each file
let ImageId = 1
setInterval(()=>{

    //if the carsolue is currently at the last 
    //image go back
    if(ImageId > 10){
        ImageId = 1
    }
    // add the fadde in transitoin and then add a new image thenn after tthe new image has been
    //inserted wait for 4s, which is the time it take to finish the fade iin animation, and remove 
    //the animation so that the next image can have it again 
    document.querySelector(".slideshow-container").querySelector("img").style["animation-name"]="fadeIn"
    document.querySelector(".slideshow-container").querySelector("img").src = `img/carousel_0${ImageId}.jpg`
    setTimeout(()=>{document.querySelector(".slideshow-container").querySelector("img").style["animation-name"]="none"},4000)
    //go to the next image
    ImageId ++;
},5000)

document.body.querySelector(".mobile-nav").addEventListener("click", ()=>{
    console.log("here")
    if(document.body.querySelector(".drop-down").classList.contains('drop-down-disabled')){
        console.log("here2")
        document.body.querySelector(".drop-down").classList.remove("drop-down-disabled")
        document.body.querySelector(".onlineClass").style.top = "225"
    }
    else{
        console.log("here3")
        document.body.querySelector(".drop-down").classList.add("drop-down-disabled")
        document.body.querySelector(".onlineClass").style.top = "100px"
    }
    
})
