"use strict";

(function() {
  angular
    .module("AcademiaDigital")
    .factory("AcadAuthInterceptor", ["AcadAuth", factory]);

  function factory(AcadAuth) {
    const authInfoKeys = ["access-token", "client", "expiry", "token-type", "uid"]

    return {
      request: function(config) {
        if (~config.url.indexOf(window.appBaseApiPath)) {
          config.headers["Content-Type"] = "application/json";
          config.headers["Accept"] = "application/json";
          config.data = config.data || "";
          const authInfo = AcadAuth.getAuthInfo();

          if (authInfo) {
            authInfoKeys.forEach(function(key) {
              config.headers[key] = authInfo[key];
            });
          }
        }

        return config;
      },

      response: function(response) {
        const headers = response.headers();
        const hasAuthInfo = authInfoKeys.every(function(key) {
          return Boolean(headers[key]);
        });

        if (hasAuthInfo) {
          const newAuthInfo = {};

          authInfoKeys.forEach(function(key) {
            newAuthInfo[key] = headers[key];
          });
          AcadAuth.setAuthInfo(newAuthInfo);
        }

        return response;
      }
    };
  }
})();
