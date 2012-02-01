
/*
 * GET devices data view.
 */


module.exports = {
	
	data : function(req, res) {
		res.render('./devices/data',{
			title : 'Device Data',
			devices : {
				
			}
		});
	}
	
}