/* Add your JavaScript to this file */

let button=document.getElementsByClassName('newsletter btn')
button.onclick=function(){
    let message=document.getElementsByClassName('message')
    let email= document.getElementById(email).value
    
    if(email==""){
        message.innerHTML="Please enter a valid email address" 
        console.log("incorrect")
    }else{
        message.innerHTML="Thank you!"+email+
        "has been to our mailing list"
        console.log("correct")
    }


}