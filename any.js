let divbtn = document.getElementById("user");
var b=[];
function fun(){
    let divEle = document.getElementById("num").value;
    let c =divEle.toString();
    console.log(c);
    b.push(c);
    console.log(b);
}
divbtn.addEventListener("click",fun)