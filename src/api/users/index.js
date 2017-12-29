import Vue from 'vue'

export default function loginUser(url){
	return Vue.http.get(url, {
	    	headers: {
	          'Accept': 'application/json'
	      	}
	    })
	    .then(response => response.json())
	    .catch(error => console.log(error));        
}
