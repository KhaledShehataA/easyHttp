function easyHTTP() {
	this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
	this.http.open('GET', url, true);

	let that = this;
	this.http.onload = function () {
		if (that.http.status === 200) {
			callback(null, that.http.responseText);
		} else {
			callback(`Error: ${that.http.status}`);
		}
	};

	this.http.send();
};

// Make an HTTP POST Request
// Make an HTTP PUT Request
// Make an HTTP DELETE Request
