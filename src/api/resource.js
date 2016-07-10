import {App} from 'constants.js';
import LoginActions from 'actions/LoginActions.js';

export default (url, options) => {
	let token = JSON.parse(localStorage.getItem(App.SECURITY_KEY));

	let defaultOptions = {
        headers: {
            'Authorization': 'Bearer ' + token.access_token,
        },
        method: 'GET'
    };

	return fetch(App.API_URI + url, {...defaultOptions, ...options}).then((response) => {
    	if(response.ok) {
		    return response.json();
		}

        switch(response.status) {
            case 401:
            LoginActions.loggedOut();
            break;
        } 
        
    });
}