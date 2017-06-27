"use strict";

(function() {
  angular
    .module("Auth")
    .controller("LoginController", [
      "$scope", "$location", "LoginService", "AcadAuth",
      Controller
    ]);

  function Controller($scope, $location, LoginService, AcadAuth) {
    $scope.userData = {};

    $scope.authenticate = function(content) {
      LoginService.authenticate($scope.userData)
        .then(function(response) {
          AcadAuth.setUser(response.data.data);
          $location.path("/customers");
        })
        .catch(function(response) {
          if (response.status === 401 || response.status === 403) {
            alert(response.data.errors[0]);
          }
        });
    };

    $scope.validateEmail = hasAnyCharacter;

    $scope.validatePassword = hasAnyCharacter;

    function hasAnyCharacter(value) {
      return value && value.length > 0;
    }
  }
})();
