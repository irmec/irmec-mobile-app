
var membersControllers =  angular.module('membersControllers', []);
	

membersControllers.controller('membersListCtrl', ['$scope', 'Members', function($scope, Members){
	$scope.members = Members.query();		
}]);

membersControllers.controller('memberEditCtrl', ['$scope','$routeParams', 'MemberEdit', function($scope, $routeParams, MemberEdit){
	
	$scope.member = MemberEdit.get({memberId:$routeParams.memberId});	
	
	
}]);




