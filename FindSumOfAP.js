calculateAP.addEventListener("click",function(){
    let a = parseInt(document.getElementById("first-term").value);
    let d = parseInt(document.getElementById("common-difference").value);
    let n = parseInt(document.getElementById("total-terms").value);
 
    let result = (n/2)*((2*a)+((n-1)*d))
document.getElementById("resultSample1").innerText=result
let ap = [];
let currentTerm = a;
for (let i = 0; i<n; i++) {
  
 
  ap.push(currentTerm);
  currentTerm += d
 console.log(ap)


    
}
document.getElementById("AP").innerText="S ={ " +ap+" } "
    console.log("hi")
})