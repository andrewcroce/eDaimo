
/*
 * GET devices data view.
 */


module.exports = {
	
	getAll : function(req, res) {
		res.render('./devices/devices',{
			title : 'Device Data',
			devices : {
				
			}
		});
	}
	
}