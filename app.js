
var app = angular.module('myApp', []);

app.controller('myController', function($scope, TwitterHandle){
    $scope.handles = TwitterHandle;
});

app.factory('AdjectiveService', function(){

    var adjArray = ['super', 'red', 'boisterous', 'gargantuan', 'funny', 'sweet', 'sassy', 'rainy', 'salty', 'monsoonal'];
    return adjArray;
});

app.factory('NounService', function(){
    var nounArray = ['cat', 'dog', 'chicken', 'goat', 'bear', 'horse', 'cow', 'tiger', 'sheep', 'lion'];
    return nounArray;
});

app.factory('TwitterHandle', function(NounService, AdjectiveService){
    var randomNum = function (min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
    var handles = [];

    for(var i = 0; i < 10; i++){
        handles.push(AdjectiveService[randomNum(0,9)] + NounService[randomNum(0,9)]);
    }

    return handles;
});
