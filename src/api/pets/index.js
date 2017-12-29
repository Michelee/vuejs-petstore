import Vue from 'vue'

export default function getPetDetails(url){
	return Vue.http.get(url, {
	    	headers: {
	          'Accept': 'application/json'
	      	}
	    })
	    .then(response => response.json())
	    .catch(error => console.log(error));        
}