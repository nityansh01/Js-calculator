let b=document.getElementById("outerscreen").value;




function one(n){
  document.getElementById("outerscreen").value+=n;
}


function equal(){
  try {outerscreen.value=eval(outerscreen.value); }  
 catch (error) { alert("alert "); }
 document.getElementById("outerscreen").value=result; }
    

function ac(){
    outerscreen.value="";
}

function equal(){
    try{ outerscreen.value=eval(outerscreen.value);}
    catch(error){alert('alert')}
    document.getElementById("ouerscreen").value=result;
}

function  Del(){
    outerscreen.value =outerscreen.value.slice(0,-1);
    
}

