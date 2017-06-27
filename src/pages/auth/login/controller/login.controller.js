"use strict";

(function () {
  angular
    .module("Auth")
    .controller("LoginController", [
      "$scope", "$location", "LoginService", "AcadAuth",
      Controller
    ]);

  function Controller($scope, $location, LoginService, AcadAuth) {
    $scope.userData = {};

    $scope.authenticate = function (content) {
      LoginService.authenticate($scope.userData)
        .then(function (response) {
          const headers = response.headers();
          debugger

          AcadAuth.setUser(response.data.data);
        });
    };

    $scope.validateEmail = hasAnyCharacter;

    $scope.validatePassword = hasAnyCharacter;

    function hasAnyCharacter(value) {
      return value && value.length > 0;
    }
  }
})();
