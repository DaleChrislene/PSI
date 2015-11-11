function getPSI(){
  var xHttpReq = new XMLHttpRequest();
  
  xHttpReq.onreadystatechange = function(){
    if(xHttpReq.readyState == 4 && xHttpReq.status == 200){
      console.log(xHttpReq.responseText);
      return xHttpReq.responseText;
    }
  }

  var url = "http://www.nea.gov.sg/api/WebAPI/?dataset=psi_update&keyref=781CF461BB6606AD28A78E343E0E417601AD1130D0C89BAC";
  xHttpReq.open("GET",url,true);
  xHttpReq.send();

}

function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
    //1.3000° N, 103.8000° E
    center: {lat: 1.3000, lng: 103.8000},
    scrollwheel: false,
    zoom: 12
  });
}

document.addEventListener('DOMContentLoaded', function(){


  //get PSI
  console.log(getPSI());

  //Parse to get North Area

  //Set in Display 
});