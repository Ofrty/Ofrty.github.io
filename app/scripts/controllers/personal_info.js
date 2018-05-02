'use strict';

angular.module('qualityCareApp')
    .controller('PersonalInfoCtrl', function ($scope, $rootScope) {
      this.prompt = {
        English: 'Personal Information'
        ,Spanish: 'Informacion Personal'
      };

      this.firstNameLang = {
        English: 'First Name'
        ,Spanish: 'Nombre de pila'
      };

      this.lastNameLang = {
        English: 'Last Name'
        ,Spanish: 'Apellido'
      };

      this.addressLang = {
        English: 'Address'
        ,Spanish: 'Dirección'
      };
      this.cityLang = {
        English: 'City'
        ,Spanish: 'Ciudad'
      };
      this.stateLang = {
        English: 'State'
        ,Spanish: 'Estado'
      };
      this.zipLang = {
        English: 'ZIP/Postal Code'
        ,Spanish: 'Código postal'
      };

      this.phoneLang = {
        English: 'Phone Number'
        ,Spanish: 'Número de teléfono'
      };

      this.lastName = '';
      this.firstName = '';
      this.address = '';
      this.city = '';
      this.state = '';
      this.zip = '';
      this.phone = '';

      $scope.setName = function(lname, fname) {
        $rootScope.name = lname + ' ' + fname;
      };
    });
