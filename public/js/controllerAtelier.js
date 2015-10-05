var x = new XMLHttpRequest();
console.log('send req');
url = document.URL;
url = url.split('/');
if(url[4]){
	document.getElementById("id").value=url[4];
	x.open('GET','/atelier/'+url[4],true);
	x.onreadystatechange = function () {
	          if(x.readyState==4 && x.status == "200")
				fillForm(JSON.parse(x.responseText));
	        }
	x.send();
}

function fillForm (json) {
	console.log(json)
	
	
	for (key in json)
		if(key=='date'){
				for (k in json[key][key]){
					console.log(k);
					if(document.getElementById(k)!==null){
						document.getElementById(k).checked = json[key][key][k]
					}else{
						console.log('date '+k+' not found');
					}
				}

		}else{
		console.log(key);			
			if(key=='free'){
				if(document.getElementById(key)!==null){
					console.log(json[key])
					document.getElementById(key).checked = json[key]
				}
			}
			else{
				if(document.getElementById(key)!==null){
					console.log(json[key])
					document.getElementById(key).value = json[key]
				}else
					console.log('id '+key+' not found');
			}
		}
}
