var data = new XMLHttpRequest();
data.open('GET','mockup.json',true);
data.onreadystatechange = function () {
          if(x.readyState==4 && x.status == "200")
			chargement(JSON.parse(x.responseText)));
			//dump(data.responseText)
		  else
			dump("erreur pendant le chargement de la page.\n");
        }
        
data.send();

function chargement (json) {
	alert(json);
}
