'use strict';

turnConsultancy.controller('turnConsultancyCtrl', ['$rootScope', function($rootScope) {
	$rootScope.$on('$routeChangeSuccess', function() {
		var d = new Date(); 
        document.getElementById("logoImg").src = 
          "turn-logo.gif?ver=" + 
           d.getTime();
	})
}]);