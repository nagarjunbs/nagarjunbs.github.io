var myApp = angular.module('myApp',[]);

myApp.directive("personalInfo",function(){
	function linker (scope, element, attr) {

		}
	var data = '<div id="personalInfo" align="center"><h2>Nagarjun Sheshadri</h2><p><i>nagarjun323@gmail.com</i> &#8226 <b>8123285408</b><br>github.com/nagarjunbs</p></div>';

		return{
			restrict:'AE',
			template:data,
			scope:{}
		}
})