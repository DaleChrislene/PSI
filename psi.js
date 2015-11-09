function getPSI(){
  var xHttpReq = new XMLHttpRequest();
  
  xHttpReq.onreadystatechange = function(){
    if(xHttpReq.readyState == 4 && xHttpReq.status == 200){
      console.log(xHttpReq.responseText);
      return xHttpReq.responseText;
    }
  }

  var url = "";
  xHttpReq.open("GET",url,true);
  xHttpReq.send();

}

document.addEventListener('DOMContentLoaded', function(){


  //get PSI
  console.log(getPSI());

  //Parse to get North Area

  //Set in Display 
});