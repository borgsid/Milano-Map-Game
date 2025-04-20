function getTokenKey() {
	var apiToken = localStorage.getItem("map-apikey");
	if (apiToken?.length > 0)
		return apiToken;
	else
		return setToken();
}
function setToken() {
	var apiKey = window.prompt("Please enter your Mapbox API key:");
	localStorage.setItem("map-apikey", apiKey);
	return apiKey;
}