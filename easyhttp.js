function easyHTTP() {
	this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function (url) {
	this.http.open('GET', url, true);

	let that = this;
	this.http.onload = function () {
		if (that.http.status === 200) {
			return that.http.responseText;
		}
	};

	this.http.send();
};
// Make an HTTP POST Request
// Make an HTTP PUT Request
// Make an HTTP DELETE Request
