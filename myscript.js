

var ceny = document.getElementsByTagName("font");
for (var i = 2; i < ceny.length; i=i+3) {
	var czk = parseFloat(ceny[i].innerHTML.slice(0, -8));
	
	change(czk,ceny[i]);
}



function change(czk,cena){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', "http://api.fixer.io/latest?symbols=CZK", true);
		xhr.send();
		 
		xhr.onreadystatechange = processRequest;
		 
		function processRequest(e) {
			if (xhr.readyState == 4 && xhr.status == 200) {
			        var response = JSON.parse(xhr.responseText);
			        var rate = response.rates.CZK;
			        cena.innerHTML = cena.innerHTML + "&nbsp;-&nbsp;&nbsp;"+(czk/rate).toFixed(2)+"&nbsp;€";
			    }
		 
		}
	
}