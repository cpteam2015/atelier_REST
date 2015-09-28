var x = new XMLHttpRequest();
x.open('GET','http://localhost:4567/atelier',true);
x.onreadystatechange = function () {
          if(x.readyState==4 && x.status == "200")
            fillForm(JSON.parse(x.responseText));
        }
x.send();

function fillForm (json) {
	console.log (json);
	document.getElementById('title_span').innerHtml = json.titre;
}
