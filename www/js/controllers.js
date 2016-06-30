
var  ctrl=angular.module('starter.controllers', ['ionic'])


ctrl.service('dataService', function($http) {
this.getColor = function(callbackFunc) {
  var color = 'color';

    $http({

        method: 'GET',
        url: 'https://rum-backend-db.herokuapp.com/'+color
     }).success(function(data){
        // With the data succesfully returned, call our callback
        console.log(data);
        callbackFunc(data);
    }).error(function(){
        alert("error");
    });
 };
 this.getSmell = function(callbackFunc) {
     $http({
         method: 'GET',
         url: 'https://rum-backend-db.herokuapp.com/smell'
      }).success(function(data){
         // With the data succesfully returned, call our callback
         callbackFunc(data);
     }).error(function(){
         alert("error");
     });
  };
  this.getNotes = function(callbackFunc) {
      $http({
          method: 'GET',
          url: 'https://rum-backend-db.herokuapp.com/note'
       }).success(function(data){
          // With the data succesfully returned, call our callback
          callbackFunc(data);
      }).error(function(){
          alert("error");
      });
   };
  this.getTaste = function(callbackFunc) {
      $http({
          method: 'GET',
          url: 'https://rum-backend-db.herokuapp.com/taste'
       }).success(function(data){
          // With the data succesfully returned, call our callback
          callbackFunc(data);
      }).error(function(){
          alert("error");
      });
   };
   this.getRum = function(callbackFunc) {
       $http({
           method: 'GET',
           url: 'https://rum-backend-db.herokuapp.com/rum'
        }).success(function(data){
           // With the data succesfully returned, call our callback
           callbackFunc(data);
           console.log(data);

       }).error(function(){
           alert("error");
       });
    }
});

ctrl.controller('tasteNotecontroller', function($scope, dataService, $http,$ionicPopup, $ionicModal,$ionicSideMenuDelegate) {
  $scope.toggleLeft = function(){$ionicSideMenuDelegate.toggleLeft();};
  $scope.choice='';
  $scope.choice2='';
  $scope.choice3='';
  $scope.note={brand: '',color: '',smell: '' , taste: '' };

    $ionicModal.fromTemplateUrl('templates/help-info.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal1) {
        $scope.modal1 = modal1;
    });
    $scope.openModal = function() {
        $scope.modal1.show();
    };
    $scope.closeModal = function() {
        $scope.modal1.hide();
    };

    $ionicModal.fromTemplateUrl('templates/help-color.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal2) {
        $scope.modal2 = modal2;
    });
    $scope.openModal = function() {
        $scope.modal2.show();
    };
    $scope.closeModal = function() {
        $scope.modal2.hide();
    };

    $ionicModal.fromTemplateUrl('templates/help-smell.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal3) {
        $scope.modal3 = modal3;
    });
    $scope.openModal = function() {
        $scope.modal3.show();
    };
    $scope.closeModal = function() {
        $scope.modal3.hide();
    };

    $ionicModal.fromTemplateUrl('templates/Progress.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modalp) {
        $scope.modalp = modalp;
    });
    $scope.openModal = function() {
        $scope.modalp.show();
    };
    $scope.closeModal = function() {
        $scope.modalp.hide();
    };
    $ionicModal.fromTemplateUrl('templates/help-taste.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modalt) {
        $scope.modalt = modalt;
    });
    $scope.openModal = function() {
        $scope.modalt.show();
    };
    $scope.closeModal = function() {
        $scope.modalt.hide();
    };

    $scope.showPopup = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Postear la Nota',
            template: '¿Estas seguro que deseas postear la Nota?'
        });
        confirmPopup.then(function(res) {
            if(res) {
                console.log('You clicked on "OK" button');
            } else {
                console.log('You clicked on "Cancel" button');
            }
        });
    };

    $scope.color = dataService.getColor(function(dataResponse) {
       $scope.color = dataResponse;

    });
    $scope.smell = dataService.getSmell(function(dataResponse) {
      $scope.checked = {word: ''};
      $scope.itensitySmel= 3;
      $scope.smell = dataResponse;
      $scope.smells=[{name:'fruity'},{name:'woody'},{name:'fragrant'},{name:'sickening'},{name:'minty'},{name:'toasted'},{name:'citric'}];
      $scope.refresh=function(){
        $scope.smells=$scope.pudge($scope.smell,$scope.checked.word);
      }


    });
    $scope.taste = dataService.getTaste(function(dataResponse) {
      $scope.checked2 = {word: ''};
      $scope.itensityTaste= 3;
      $scope.taste = dataResponse;
      $scope.tastes=[{name:'sweet'},{name:'sour'},{name:'spicy'},{name:'bitter'},{name:'umami'},{name:'astringent'},{name:'salty'}];
      $scope.refresh2=function(){
        $scope.tastes=$scope.pudge($scope.taste,$scope.checked2.word);
      }


    });
    $scope.rum = dataService.getRum(function(dataResponse) {
      $scope.checked3 = {word: ''};
      $scope.rum = dataResponse;
      $scope.brand=$scope.nonrepeatbrand($scope.rum);
      $scope.brands=$scope.pudge1($scope.brand,$scope.checked3.word);
      $scope.name=$scope.relatedto($scope.rum);

      $scope.refresh3=function(){
        $scope.brands=$scope.pudge1($scope.brand,$scope.checked3.word);
      };

    });

  $scope.getcategories=function(array){
    var array2=[];

    for (var i = 0; i < array.length; i++) {
      if(!$scope.repeatword(array.category,array2)){
        array2.push(array[i]);
      }
    return array2;
  }
    }
    $scope.notes = dataService.getNotes(function(dataResponse) {
      $scope.notes = dataResponse;
    });

    $scope.relatedto=function(word,rum){
      var array=[];
      for (var i = 0; i < rum.length; i++) {
        if(rum[i].brand==word){
          array.push(rum[i]);

        }
      }
      return array;
    };
    $scope.nonrepeatbrand=function(rum) {
      var array2=[];
      for (var i = 0; i < rum.length; i++) {
        if(!$scope.repeatword(rum[i].brand,array2)){
            array2.push(rum[i]);
      }

    }
      return array2;
    };
    $scope.repeatword=function(word,array) {
      for (var j = 0; j < array.length; j++) {
        if(array[j].brand==word){
          return true;
        }
      }
      return false;
    };
    $scope.pudge=function(smell,word){
    var array =[];
      for (var i = 0; i <smell.length; i++) {
        if(smell[i].name==word || smell[i].category==word){
          if(smell[i].name==word){
            for (var j = 0; j < smell.length; j++) {
              if(smell[j].category==smell[i].category){
                array.push(smell[j]);
              }
            }
          }else{
          array.push(smell[i]);
          }
        }

      }
      return array;
    };
  $scope.pudge1=function(smell,word){
    var array =[];
    for (var i = 0; i <smell.length; i++) {
      if(smell[i].brand==word){
              array.push(smell[i]);

        }
      }
    return array;
  };

    $scope.getID=function (word,rum) {
      var id = 0;
      for (var i = 0; i < rum.length; i++) {
        if(rum[i].name==word){
          id = rum[i].id;
        }
      }
      return id;
    };

    $scope.postNote=function (rum,taste,smell,color){
     var data ={
        user_id: '1'
        , rum_id: rum,
         taste_id: taste ,
        tastedIntensity: '3',
         smell_id: smell,
          smellIntensity: '3',
           color_id: color

     };



            $http.post('https://rum-backend-db.herokuapp.com/note', data)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });


    };

});
