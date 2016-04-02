/** 
 * @author Carey R. Dayrit
 * 
 * @description
 * this is a small app, start with the app.js, routes and services should be in separate files once the codebase becomes huge
 * 
 **/

var memberRecordsApp = angular.module('memberRecordsApp', [
	'ngRoute', 
	'membersControllers', 
	'memberRecordsServices', 
	'mobile-angular-ui']);


/** Routes **/

memberRecordsApp.config(['$routeProvider', function ($routeProvider) {								
	$routeProvider
		.when('/' ,{				
			templateUrl: 'views/list.html',
			controller: 'membersListCtrl'															
		})
		
		.when('/edit-member/:memberId',{
			templateUrl: 'views/edit.html',
			controller: 'memberEditCtrl'			
		});
		
	}
]);


/** Services **/

var memberRecordsServices = angular.module('memberRecordsServices', ['ngResource']).constant('API_URL', 'http://localhost/irmec-api/laravel/public/api/v1/');

memberRecordsServices.factory('Members', ['$resource', 'API_URL',
   function($resource, API_URL){		   
	  	return $resource(API_URL + 'members',{}, {query: {method:'GET', params:{}, isArray:true}});
 }]);
 
memberRecordsServices.factory('MemberEdit', ['$resource', 'API_URL',
	function($resource, API_URL){
		return $resource(API_URL + 'members/:memberId',{}, {query: {method:'GET', params:{}, isArray:true}}); 		
}]);


	

