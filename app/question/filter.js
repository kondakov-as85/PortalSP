angular.module('myApp.question').filter('formatText', function(){
    return function(text){
        if (text.indexOf("бляхамуха")!==-1) {
            return "***МАТ ТРЕХЭТАЖНЫЙ***";
        }else{
            return text;
        }
    }
})