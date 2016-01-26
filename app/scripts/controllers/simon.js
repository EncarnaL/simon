'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:SimonCtrl
 * @description
 * # SimonCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('SimonCtrl', function () {
    $(document).ready (function(){
	
			$("#verde").click(function(){
				$("#titulo").text("verde");
			    })	
			$("#amarillo").click(function(){
				$("#titulo").text("Amarillo");
			    })	
			$("#azul").click(function(){
				$("#titulo").text("Azul");
			    })	
			$("#rojo").click(function(){
				$("#titulo").text("Rojo");
			    })	    
		}); 
  });
