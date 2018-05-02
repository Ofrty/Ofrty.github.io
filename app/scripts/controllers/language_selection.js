'use strict';

angular.module('qualityCareApp')
  .controller('LanguageSelectionCtrl', function ($scope, $rootScope) {
    $scope.languageOptions = this.languageOptions = [
      'English',
      'Spanish'
    ];

    this.prompt = {
      English: 'What is your preferred language?'
      ,Spanish: '¿Cuál es tu idioma preferido?'
    };

    this.language = $rootScope.langDef;

    /*setLang() changes the language at the root scope*/
    $scope.setLang = function(val) {
      $rootScope.lang = val;
    };
  });
