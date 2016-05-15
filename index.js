(function() {
	'use strict';

	////////////////
	// import
	////////////////
	const express = require('express');
	const app = express();
	////////////////
	// global
	////////////////
	const PORT = 8080;
	////////////////
	// main
	////////////////
	if (require.main === module) {
		app.get('/', function(req, res) {
			res.send('Hello World\n');
		});

		app.listen(PORT);
		console.log('Runngin on http://localhost:%d', PORT);
	}

})();
