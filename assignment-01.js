let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;


document.getElementById("add1").onclick = function(){
    count1+=1;
    document.getElementById("count1").innerHTML = count1;
}
document.getElementById("minus1").onclick = function(){
    count1-=1;
    if(count1 < 0)
    {
        count1 = 0;
    }
    document.getElementById("count1").innerHTML = count1;
}

document.getElementById("add2").onclick = function(){
    count2+=1;
    document.getElementById("count2").innerHTML = count2;
}
document.getElementById("minus2").onclick = function(){
    count2-=1;
    if(count2 < 0)
    {
        count2 = 0;
    }
    document.getElementById("count2").innerHTML = count2;
}

document.getElementById("add3").onclick = function(){
    count3+=1;
    document.getElementById("count3").innerHTML = count3;
}
document.getElementById("minus3").onclick = function(){
    count3-=1;
    if(count3 < 0)
    {
        count3 = 0;
    }
    document.getElementById("count3").innerHTML = count3;
}

document.getElementById("add4").onclick = function(){
    count4+=1;
    document.getElementById("count4").innerHTML = count4;
}
document.getElementById("minus4").onclick = function(){
    count4-=1;
    if(count4 < 0)
    {
        count4 = 0;
    }
    document.getElementById("count4").innerHTML = count4;
}

document.getElementById("add5").onclick = function(){
    count5+=1;
    document.getElementById("count5").innerHTML = count5;
}
document.getElementById("minus5").onclick = function(){
    count5-=1;
    if(count5 < 0)
    {
        count5 = 0;
    }
    document.getElementById("count5").innerHTML = count5;
}

document.getElementById("add6").onclick = function(){
    count6+=1;
    document.getElementById("count6").innerHTML = count6;
}
document.getElementById("minus6").onclick = function(){
    count6-=1;
    if(count6 < 0)
    {
        count6 = 0;
    }
    document.getElementById("count6").innerHTML = count6;
}