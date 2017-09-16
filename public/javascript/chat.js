var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController',function ($scope){
   $scope.messages =[
   {
   	   sender: "BOT",
   	   text:"hello",
   	   time:"12:00",
   },
   {
       sender :"USER",
       text:"morning",
       time:"2:30",
   }
   ]

   var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");

   exampleSocket.onmessage  =   function  (event) {
          var jsonData = JSON.parse(event.data);
          console.log(jsonData);
      };



});