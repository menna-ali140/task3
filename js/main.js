function  fun(){
 var num = document.getElementById("menna").value;
 var  result = document.getElementById("h");
if(num==""){
    result.innerHTML = "please enter a data";
      return false;      
}else if(isNaN(num)){
    result.innerHTML="please enter a number not a text";
      return false;
}else if(num < 0) {
    result.innerHTML="please enter a positive number";
    return false;     
}else{
    result.innerHTML= num * 50 +"Egyptionpound";
    return false;    
} 
}