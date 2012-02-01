
/*
 * Main Site Router
 */

module.exports = {

	index : function(req, res) {
		res.render('index', {
			title : 'Main Page'
		});
	}
	
};