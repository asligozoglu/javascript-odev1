let fullName= prompt("Lütfen Adınızı Giriniz.")
let myName= document.querySelector('#myName')
myName.innerHTML=`${fullName}`

function showTime() {
    let date = new Date(); 
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
   let time = h + ":" + m + ":" + s ;
   
   document.getElementById("myClock").innerHTML= time;
   setTimeout(showTime,1000);


}
showTime();

