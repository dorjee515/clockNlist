function clock(){ 
   let d=new Date();
   document.getElementById("root").innerHTML=d.getHours()+ ":"+d.getMinutes()+":"+d.getSeconds();
}
var s="";
var cnt=1;
function add(){
  var s1=document.getElementById("t1").value;
  s+='<input style="height:10px,width:10px" type="checkbox" id="m1">Status</input><h1>'+cnt+'.'+s1+'</h1>';
 document.getElementById("s1").innerHTML=s;
 cnt++;
}
function check() {
document.getElementById("m1").checked=true;
}

setInterval(clock,1000);
add();
check();
