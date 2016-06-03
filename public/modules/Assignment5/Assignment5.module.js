(function(angular) {
angular
.module("AngularApp.Assignment5", [])
.config(Configuration)
.directive("fileRead",fileRead);

function fileRead(){
	return {
		restrict : 'AE',
		link : function(scope,elem,attrs){
//      elem.bind("focus",function(e){
//        $("#DragAreaInput").attr("readonly",true);
//      });
//      elem.bind("blur",function(e){
//        $("#DragAreaInput").attr("readonly",false);
//        //e.currentTarget.attributes("readonly",readonly);
//      });
			elem.bind("drop",function(e){
        //$("#DragAreaInput").attr("readonly",false);

        e.preventDefault();
				 var file = e.originalEvent.dataTransfer.files[0];
				 if(file.type=== "" || file.type === "text/plain" || file.type === "json"){
				 	var reader = new FileReader();
				 	reader.onload=function(data){
				 		var output = document.getElementById('FileOutput');
				 		output.innerHTML = data.target.result;
               //elem[0].value = "File Dropped";
      	 			}
      	 			reader.readAsText(file);
				 } else {
				 	alert(file.type + " is not supported");
				 }
			});
		}
	}
};

Configuration.$inject = ['$routeProvider'];
function Configuration($routeProvider)
{
    $routeProvider
        .when("/Assignment5", {
            templateUrl: "modules/Assignment5/Assignment5.html",
            controller: "Assignment5Controller"
        });
};

})(window.angular);
