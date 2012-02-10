jQuery(document).ready(function(){
	
	var $ = jQuery;
	$.app = {
		
		init : function() {
			console.log('Application initialized in client.');
		},
		
		renderDeviceGraph: function(element) {
			console.log('Rendering device graph.')
		}
		
	};
	
	$.app.init();
	
});