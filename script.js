console.log("Hey this is Arijit");
let boxes= document.body.getElementsByClassName("box");

function getRandomColor(){
    let var1= Math.ceil(0+(Math.random()*255));
    let var2= Math.ceil(0+(Math.random()*255));
    let var3= Math.ceil(0+(Math.random()*255));
    return `rgb(${var1}, ${var2}, ${var3})`;
}

for(let i=0;i<boxes.length;i++){
    boxes[i].style.color=getRandomColor();
    boxes[i].style.backgroundColor=getRandomColor();
}
