var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body =document.getElementById("body");

console.log(css);
console.log(color1);
console.log(color2);

color1.addEventListener("input",function(){
  changecolor();
});

color2.addEventListener("input",function(){
    console.log(color2.value);
changecolor();
});
function changecolor(){
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
    css.textContent=body.style.background+";";
}

function isvalid(bool){
    return bool  ;
}

var answer=isvalid(false) ?"You May Enter" :"Access Denied";

var autoans="Your account # is"+(isvalid(true) ? "123":"not avilable");

 const first=()=>{
     const greet="Hi";
     const second=()=>{
         alert(greet);
     }
     return second;
 }