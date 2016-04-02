
var membersControllers =  angular.module('membersControllers', []);
	

membersControllers.controller('membersListCtrl', ['$scope', '$http', 'Members', function($scope,$http, Members){
	$scope.members = Members.query();
	
	
}]);




