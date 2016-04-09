var retrievePSI = function(){
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var resp = xhr.responseText;
			var result = parseData(resp);
			displayData(result);
		}
	}
	
	var url = "http://www.haze.gov.sg";
	xhr.open("GET", url, true);
	
	xhr.send();
}

var parseData = function(resp){
	var patt_24 = /24-hr PSI:(.+)<\/span>/;
	var mat_24 = resp.match(patt_24);
	var psi_24 = ''
	if(typeof mat_24 != 'undefined'){
		psi_24 = mat_24[1].trim();
	}
	
	var patt_3 = /3-hr PSI:(.+)<\/span>/;
	var mat_3 = resp.match(patt_3);
	var psi_3 = '';
	if(typeof mat_3 != 'undefined'){
		psi_3 = mat_3[1].trim();
	}
	
	var res = {};
	res.psi_24 = psi_24;
	res.psi_3 = psi_3;
	
	return res;
}

var displayData = function(result){
	var span_psi_24 = document.getElementById("psi-reading-24");
	span_psi_24.innerHTML = result.psi_24;

	var span_psi_3 = document.getElementById("psi-reading-3");
	span_psi_3.innerHTML = result.psi_3;

	var span_date_time = document.getElementById("date-time");
	var today = new Date();
	span_date_time.innerHTML = today.toLocaleTimeString() + ", " + today.toDateString();
}

document.addEventListener('DOMContentLoaded', function(){
	retrievePSI();
});
