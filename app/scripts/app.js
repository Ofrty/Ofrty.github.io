'use strict';

/**
 * @ngdoc overview
 * @name qualityCareApp
 * @description
 * # qualityCareApp
 *
 * Main module of the application.
 */

var qualityCareAppMod =

angular
    .module('qualityCareApp', [
	'ngAnimate',
	'ngCookies',
	'ngResource',
	'ngRoute',
	'ngSanitize',
	'ngTouch',
    ])
    .config(function ($routeProvider) {
	$routeProvider
	    .when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl',
		controllerAs: 'main'
	    })
	    .when('/about', {
		templateUrl: 'views/about.html',
		controller: 'AboutCtrl',
		controllerAs: 'about'
	    })
	    .when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'ContactCtrl',
		controllerAs: 'contact'
	    })
	    .when('/language', {
		templateUrl: 'views/language_selection.html',
		controller: 'LanguageSelectionCtrl',
		controllerAs: 'language_selection'
	    })
	    .when('/personal', {
		templateUrl: 'views/personal_info.html',
		controller: 'PersonalInfoCtrl',
		controllerAs: 'personal_info'
	    })
	    .when('/medical', {
		templateUrl: 'views/medical_history.html',
		controller: 'MedicalHistoryCtrl',
		controllerAs: 'medical_history'
	    })
	    .when('/privacy', {
		templateUrl: 'views/privacy.html',
		controller: 'PrivacyCtrl',
		controllerAs: 'privacy'
	    })
	    .when('/demo/personal_information', {
		templateUrl: 'views/demo_personal_info.html',
    controller: 'PersonalInfoCtrl',
    controllerAs: 'personal_info'
	    })
	    .when('/demo/misc', {
		templateUrl: 'views/demo_misc.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/symptoms', {
		templateUrl: 'views/demo_symptoms.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/locations', {
		templateUrl: 'views/demo_locations.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/onset', {
		templateUrl: 'views/demo_onset.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/description', {
		templateUrl: 'views/demo_description.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/allergies', {
		templateUrl: 'views/demo_allergies.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/medications', {
		templateUrl: 'views/demo_medications.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/hazards', {
		templateUrl: 'views/demo_hazards.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/relief', {
		templateUrl: 'views/demo_relief.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/end', {
		templateUrl: 'views/demo_end.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/about', {
		templateUrl: 'views/about.html',
		controller: 'AboutCtrl',
		controllerAs: 'about'
	    })
	    .otherwise({
		redirectTo: '/'
	    });
    });

/*storage of selected information at $rootScope level*/
qualityCareAppMod.run(function($rootScope) {
  $rootScope.langDef = 'English';
  $rootScope.lang = $rootScope.langDef;

  $rootScope.textLang = {};

  $rootScope.textLang.languageSelection = {
    English: 'Language Selection'
    ,Spanish: 'Seleccione el Idioma'
  };

  $rootScope.textLang.begin = {
    English: 'Begin'
    ,Spanish: 'Empezar'
  };

  $rootScope.textLang.restart = {
    English: 'Restart'
    ,Spanish: 'Reiniciar'
  };

  $rootScope.textLang.next = {
    English: 'Next'
    ,Spanish: 'Siguiente'
  };

  $rootScope.textLang.filter = {
    English: 'Filter'
    ,Spanish: 'Filtro'
  };

  $rootScope.symptoms = [];
  $rootScope.descriptions = [];
  $rootScope.onset = '';
  $rootScope.locations = [];
  $rootScope.allergies = [];
  $rootScope.medications = [];
  $rootScope.hazards = [];
  $rootScope.reliefs = [];
});


/*
  All code that will be loaded for header / on all pages
*/

// In nav bar, only most recently selected item is highlighted
$('.nav a').on('click', function() {
  $('.nav').find('.active').removeClass('active');
  $(this).parent().addClass('active');
});
