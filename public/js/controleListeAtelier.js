var data = new XMLHttpRequest();
data.open('GET','/atelier',true);
//~ var doc = JSON.parse(data.responseText);
data.onreadystatechange = function () {
          if(data.readyState==4 && data.status == "200")
			  chargement(JSON.parse(data.responseText));
		  
        }        
data.send();

function chargement (json) {
	console.log(json);
	for(i=0;i< json.length; i++){
		var ligne = document.createElement('tr');
		ligne.innerHTML = '<td><input type="text"  disabled=True style="width:97%;" value="'+json[i].titre+'"></td>'
		ligne.innerHTML+= '<td><input type="text" disabled=True style="width:97%;" value="'+json[i].theme+'"></td>'
		ligne.innerHTML+= '<td><input type="button"  onclick=window.open("atelier.html/'+json[i]._id+'") value="visualiser" style="margin:0 10px;" />'
		ligne.innerHTML+=  '<a href="/delete/'+json[i]._id+'">Delete</a></td></tr>'
		document.getElementById('listAt').appendChild(ligne);
	}
}


