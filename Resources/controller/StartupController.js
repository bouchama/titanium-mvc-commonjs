function StartupController() {
	
	function showLoginWindow() {
		var loginController = new LoginController();
		loginController.init();
	}
	exports.showLoginWindow = showLoginWindow;
	
	return {
		init: function() {
			showLoginWindow();
		}
	};
	
}
module.exports = StartupController;