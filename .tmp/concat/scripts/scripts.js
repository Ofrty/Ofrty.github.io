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
    .config(["$routeProvider", function ($routeProvider) {
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
    }]);

/*storage of selected information at $rootScope level*/
qualityCareAppMod.run(["$rootScope", function($rootScope) {
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
}]);


/*
  All code that will be loaded for header / on all pages
*/

// In nav bar, only most recently selected item is highlighted
$('.nav a').on('click', function() {
  $('.nav').find('.active').removeClass('active');
  $(this).parent().addClass('active');
});

'use strict';

/**
 * @ngdoc function
 * @name eklinkhammergithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eklinkhammergithubioApp
 */
angular.module('qualityCareApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'SitePoint'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name eklinkhammergithubioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the eklinkhammergithubioApp
 */
angular.module('qualityCareApp')
  .controller('AboutCtrl', function () {});

'use strict';

/**
 * @ngdoc function
 * @name eklinkhammergithubioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the eklinkhammergithubioApp
 */
angular.module('qualityCareApp')
  .controller('ContactCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

angular.module('qualityCareApp')
  .controller('LanguageSelectionCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {
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
  }]);

'use strict';

angular.module('qualityCareApp')
    .controller('PersonalInfoCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {
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
    }]);

'use strict';

angular.module('qualityCareApp')
    .controller('PrivacyCtrl', function () {});

'use strict';

angular.module('qualityCareApp')
  .controller('DemoCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {
    var i = 0;

    this.prompts = {};
    this.prompts.symptoms = {};
    this.prompts.locations = {};
    this.prompts.descriptions = {};
    this.prompts.onset = {};
    this.prompts.allergies = {};
    this.prompts.medications = {};
    this.prompts.hazards = {};
    this.prompts.reliefs = {};
    this.prompts.symptoms.English = 'Why are you here today?';
    this.prompts.symptoms.Spanish = '¿Por qué estas aquí hoy?';
    this.prompts.locations.English = 'Where do your symptoms occur?';
    this.prompts.locations.Spanish = '¿Donde estas los symptomas?';
    this.prompts.descriptions.English = 'How would you describe your symptoms?';
    this.prompts.descriptions.Spanish = '¿Cómo describirías tus síntomas?';
    this.prompts.onset.English = 'When did it start?';
    this.prompts.onset.Spanish = '¿Cuándo empezo?';
    this.prompts.allergies.English = 'Are you allergic to anything?';
    this.prompts.allergies.Spanish = '¿Eres alérgico a algo?';
    this.prompts.medications.English = 'Are you currently taking any medications?';
    this.prompts.medications.Spanish = '¿Estás tomando algún medicamento actualmente?';
    this.prompts.hazards.English = 'Is there anything that exacerbates your symptoms?';
    this.prompts.hazards.Spanish = '¿Hay algo que agrave tus síntomas?';
    this.prompts.reliefs.English = 'Is there anything that relieves your symptoms?';
    this.prompts.reliefs.Spanish = '¿Hay algo que alivia tus síntomas?';

    //symptoms.html
    this.symptoms = {};
    this.symptomNames = [
      {English: 'Other', Spanish: 'Otro'}
      ,{English: 'Bleeding', Spanish: 'Sangría'}
      ,{English: 'Bruise', Spanish: 'Moretón'}
      ,{English: 'Congestion', Spanish: 'Congestión'}
      ,{English: 'Constipation', Spanish: 'Estreñimiento'}
      ,{English: 'Cough', Spanish: 'Tos'}
      ,{English: 'Diarrhea', Spanish: 'Diarrea'}
      ,{English: 'Dizziness', Spanish: 'Mareo'}
      ,{English: 'Headaches', Spanish: 'Dolores de Cabeza'}
      ,{English: 'Nausea', Spanish: 'Náusea'}
      ,{English: 'Numbness', Spanish: 'Entumecimiento'}
      ,{English: 'Pain', Spanish: 'Dolor'}
      ,{English: 'Sore Throat', Spanish: 'Dolor de Garganta'}
      ,{English: 'Swelling', Spanish: 'Hinchazón'}
      ,{English: 'Wheezing', Spanish: 'Sibilancias'}
    ];

    for (i = 0; i < this.symptomNames.length; i++) {
      var symptomName = this.symptomNames[i][$rootScope.langDef];
      this.symptoms[symptomName] = false;
    }

    // demo_locations.html
    this.locations = {};
    this.locationNames = [
      {English: 'Other', Spanish: 'Otro'}
      ,{English: 'Abdomen', Spanish: 'Abdomen'}
      ,{English: 'Back', Spanish: 'Espalda'}
      ,{English: 'Chest', Spanish: 'Pecho'}
      ,{English: 'Eye', Spanish: 'Ojo'}
      ,{English: 'Foot', Spanish: 'Pie'}
      ,{English: 'Hand', Spanish: 'Mano'}
      ,{English: 'Head', Spanish: 'Cabeza'}
      ,{English: 'Hip', Spanish: 'Cadera'}
      ,{English: 'Knee', Spanish: 'Rodilla'}
      ,{English: 'Neck', Spanish: 'Cuello'}
      ,{English: 'Pelvis', Spanish: 'Pelvis'}
      ,{English: 'Throat', Spanish: 'Garganta'}
    ];

    for (i = 0; i < this.locationNames.length; i++) {
      var locationName = this.locationNames[i][$rootScope.langDef];
      this.locations[locationName] = false;
    }

    // demo_descriptions.html
    this.descriptions = {};
    this.descriptionNames = [
      {English: 'Other', Spanish: 'Otro'}
      ,{English: 'Annoying', Spanish: 'Molesto'}
      ,{English: 'Burning', Spanish: 'Ardiente'}
      ,{English: 'Irritating', Spanish: 'Irritante'}
      ,{English: 'Itching', Spanish: 'Comezón'}
      ,{English: 'Numb', Spanish: ' Entumecido'}
      ,{English: 'Puss', Spanish: 'Cara'}
      ,{English: 'Radiating', Spanish: 'Irradiando'}
      ,{English: 'Sharp', Spanish: 'Agudo'}
      ,{English: 'Tender', Spanish: 'Oferta'}
    ];

    for (i = 0; i < this.descriptionNames.length; i++) {
      var descriptionName = this.descriptionNames[i][$rootScope.langDef];
      this.descriptions[descriptionName] = false;
    }

    //demo_onset.html
    this.onset = {};
    this.onset.yearPlaceholder = new Date().getFullYear();
    this.onset.monthPlaceholder = new Date().getMonth();
    this.onset.dayPlaceholder = new Date().getDay();
    this.onset.year = '';
    this.onset.month = '';
    this.onset.day = '';
    this.yearLang = {English: 'Year', Spanish: 'Año'};
    this.monthLang = {English: 'Month', Spanish: 'Mes'};
    this.dayLang = {English: 'Day', Spanish: 'Día'};

    // demo_allergies_food.html
    this.allergies = {};
    this.allergyNames = [
      {English: 'Other', Spanish: 'Otro'}
      ,{English: 'Dairy', Spanish: 'Lechería'}
      ,{English: 'Eggs', Spanish: 'Huevos'}
      ,{English: 'Fish', Spanish: 'Pescado'}
      ,{English: 'Peanuts', Spanish: 'Miseria'}
      ,{English: 'Seeds', Spanish: ' Semillas'}
      ,{English: 'Sesame', Spanish: 'Sésamo'}
      ,{English: 'Shellfish', Spanish: 'Mariscos'}
      ,{English: 'Soy', Spanish: 'Soja'}
      ,{English: 'Spices', Spanish: 'Especias'}
      ,{English: 'Treenuts', Spanish: 'Treenuts'}
      ,{English: 'Wheat', Spanish: ' Trigo'}
    ];

    for (i = 0; i < this.allergyNames.length; i++) {
      var allergyName = this.allergyNames[i][$rootScope.langDef];
      this.allergies[allergyName] = false;
    }

    // demo_medications.html
    this.medications = {};
    this.medicationNames = [
      'Acetaminophen',
      'Adderall',
      'Alprazolam',
      'Amitriptyline',
      'Amlodipine',
      'Amoxicillin',
      'Ativan',
      'Atorvastatin',
      'Azithromycin',
      'Ciprofloxacin',
      'Citalopram',
      'Clindamycin',
      'Clonazepam',
      'Codeine',
      'Cyclobenzaprine',
      'Cymbalta',
      'Doxycycline',
      'Gabapentin',
      'Hydrochlorothiazide',
      'Ibuprofen',
      'Lexapro',
      'Lisinopril',
      'Loratadine',
      'Lorazepam',
      'Losartan',
      'Lyrica',
      'Meloxicam',
      'Metformin',
      'Metoprolol',
      'Naproxen',
      'Omeprazole',
      'Oxycodone',
      'Pantoprazole',
      'Prednisone',
      'Tramadol',
      'Trazodone',
      'Wellbutrin',
      'Xanax',
      'Zoloft',
    ];

    for (i = 0; i < this.medicationNames.length; i++) {
      var medicationName = this.medicationNames[i];
      this.medications[medicationName] = false;
    }

    // demo_hazards.html
    this.hazards = {};
    this.hazardNames = [
      {English: 'Other', Spanish: 'Otro'}
      ,{English: 'Nothing', Spanish: 'Nada'}
      ,{English: 'Cold', Spanish: 'Frío'}
      ,{English: 'Exercise', Spanish: 'Ejercicio'}
      ,{English: 'Heat', Spanish: 'Calor'}
      ,{English: 'Leaning', Spanish: ' Propensión'}
      ,{English: 'Lifting', Spanish: 'Levantamiento'}
      ,{English: 'Lying Down', Spanish: 'Acostado'}
      ,{English: 'Medications', Spanish: 'Medicamentos'}
      ,{English: 'Standing', Spanish: 'En pie'}
      ,{English: 'Stress', Spanish: 'Estrés'}
      ,{English: 'Smoking', Spanish: 'De fumar'}
    ];

    for (i = 0; i < this.hazardNames.length; i++) {
      var hazardName = this.hazardNames[i][$rootScope.lang];
      this.hazards[hazardName] = false;
    }

    // demo_relief.html
    this.reliefs = {};
    this.reliefNames = [
      {English: 'Other', Spanish: 'Otro'}
      ,{English: 'Nothing', Spanish: 'Nada'}
      ,{English: 'Coconut Oil', Spanish: 'Aceite de coco'}
      ,{English: 'Cold', Spanish: 'Frío'}
      ,{English: 'Epsom Salt', Spanish: 'Sal de Epsom'}
      ,{English: 'Exercise', Spanish: ' Ejercicio'}
      ,{English: 'Heat', Spanish: 'Calor'}
      ,{English: 'Lying Down', Spanish: 'Acostado'}
      ,{English: 'Massage', Spanish: 'Masaje'}
      ,{English: 'Movement', Spanish: 'Movimiento'}
      ,{English: 'Rest', Spanish: 'Descanso'}
      ,{English: 'Water', Spanish: 'Agua'}
    ];

    for (i = 0; i < this.reliefNames.length; i++) {
      var reliefName = this.reliefNames[i][$rootScope.lang];
      this.reliefs[reliefName] = false;
    }

    $scope.relief = this.reliefs;
    $scope.rkeys = this.reliefNames;
    $scope.colors = {Blue : true, Orange : false};

    /*setRootMult() changes the 'true' symptoms at the root scope*/
    $scope.setRootMult = function(val, item) {
      var tempVal = [];

      for (var key in val) {
        if (val[key]) {
          tempVal.push(key);
        }
      }

      $rootScope[item] = tempVal;
    };

  }]);

angular.module('qualityCareApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<div class=\"about-body\"> <div> <h2> ABOUT BODY </h2> </div> <div> Quality Care is a medical translation app aimed at supporting patients fill out their medical history forms... </div> </div>"
  );


  $templateCache.put('views/contact.html',
    "<h1> Contact Information </h1> Copy / paste from my personal website. Edit <h2> Email Address </h2> klinkhae [at] oregonstate.edu <h2> Phone Number </h2> Work: <br> Cell: <br> Fax: <br> <h2> Mailing Address </h2> Eric Klinkhammer <br> Graf Hall <br> 1680 SW Monroe Ave <br> Corvallis, OR 97331 <br>"
  );


  $templateCache.put('views/demo_allergies.html',
    "<div ng-controller=\"LanguageSelectionCtrl\"> Change Language? <select ng-init=\"\" ng-model=\"lang\" ng-options=\"option for option in languageOptions\" ng-change=\"setLang(lang)\"> </select> </div> <h2>{{demo.prompts.allergies[lang]}}</h2> <div class=\"form-group\"> <label class=\"control-label\">Filter: <input ng-model=\"demo.filter\" class=\"form-control\"> </label> </div> <div class=\"pre-scrollable\"> <div ng-repeat=\"(key,val) in demo.allergyNames | filter:demo.filter\" class=\"form-check\"> <label class=\"form-check-label\"> <input type=\"checkbox\" ng-model=\"demo.allergies[val[langDef]]\" class=\"form-check-input\"> {{val[lang]}} <em ng-if=\"lang != langDef\">({{val.English}})</em> </label> </div> <!--\n" +
    "  <div ng-repeat=\"key in demo.allergyNames | filter:demo.filter\" class=\"form-check\">\n" +
    "    <label class=\"form-check-label\">\n" +
    "      <input type=\"checkbox\" ng-model=\"demo.allergies[key]\" class=\"form-check-input\"/> {{key}}\n" +
    "    </label>\n" +
    "  </div>\n" +
    "  --> </div> <nav class=\"navbar navbar-default\" role=\"navigation\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> </div> <div class=\"navbar-collapse collapse\"> <ul class=\"nav navbar-nav navbar-left\"> <li><a href=\"#\" class=\"restart\" ng-click=\"$root.lang = $root.langDef\">{{textLang.restart[lang]}}</a></li> </ul> <ul class=\"nav navbar-nav navbar-right next\"> <li><a href=\"#!/demo/medications\" ng-click=\"setRootMult(demo.allergies, 'allergies')\">{{textLang.next[lang]}}</a></li> </ul> </div> </nav>"
  );


  $templateCache.put('views/demo_description.html',
    "<div ng-controller=\"LanguageSelectionCtrl\"> Change Language? <select ng-init=\"\" ng-model=\"lang\" ng-options=\"option for option in languageOptions\" ng-change=\"setLang(lang)\"> </select> </div> <h2>{{demo.prompts.descriptions[lang]}}</h2> <div class=\"form-group\"> <label class=\"control-label\">Filter: <input ng-model=\"demo.filter\" class=\"form-control\"> </label> </div> <div class=\"pre-scrollable\"> <div ng-repeat=\"(key,val) in demo.descriptionNames | filter:demo.filter\" class=\"form-check\"> <label class=\"form-check-label\"> <input type=\"checkbox\" ng-model=\"demo.descriptions[val[langDef]]\" class=\"form-check-input\"> {{val[lang]}} <em ng-if=\"lang != langDef\">({{val.English}})</em> </label> </div> <!--\n" +
    "  <div ng-repeat=\"key in demo.descriptionNames | filter:demo.filter\" class=\"form-check\">\n" +
    "    <label class=\"form-check-label\">\n" +
    "      <input type=\"checkbox\" ng-model=\"demo.descriptions[key]\" class=\"form-check-input\"/> {{key}}\n" +
    "    </label>\n" +
    "  </div>\n" +
    "  --> </div> <nav class=\"navbar navbar-default\" role=\"navigation\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> </div> <div class=\"navbar-collapse collapse\"> <ul class=\"nav navbar-nav navbar-left\"> <li><a href=\"#\" class=\"restart\" ng-click=\"$root.lang = $root.langDef\">{{textLang.restart[lang]}}</a></li> </ul> <ul class=\"nav navbar-nav navbar-right next\"> <li><a href=\"#!/demo/onset\" ng-click=\"setRootMult(demo.descriptions, 'descriptions')\">{{textLang.next[lang]}}</a></li> </ul> </div> </nav>"
  );


  $templateCache.put('views/demo_end.html',
    "<h2>Thank you for answering the questions!</h2> <h3>Selections:</h3> <ul> <li>Symptoms: {{symptoms}}</li> <li>Description: {{descriptions}}</li> <li>Locations: {{locations}}</li> <li>Allergies: {{allergies}}</li> <li>Medications: {{medications}}</li> <li>Hazards: {{hazards}}</li> <li>Reliefs: {{reliefs}}</li> </ul> <div class=\"navbar-collapse collapse\"> <ul class=\"nav navbar-nav navbar-left\"> <li><a href=\"#\" class=\"restart\" ng-click=\"$root.lang = $root.langDef\">{{textLang.restart[lang]}}</a></li> </ul> </div>"
  );


  $templateCache.put('views/demo_hazards.html',
    "<div ng-controller=\"LanguageSelectionCtrl\"> Change Language? <select ng-init=\"\" ng-model=\"lang\" ng-options=\"option for option in languageOptions\" ng-change=\"setLang(lang)\"> </select> </div> <h2>{{demo.prompts.hazards[lang]}}</h2> <div class=\"form-group\"> <label class=\"control-label\">Filter: <input ng-model=\"demo.filter\" class=\"form-control\"> </label> </div> <div class=\"pre-scrollable\"> <div ng-repeat=\"(key,val) in demo.hazardNames | filter:demo.filter\" class=\"form-check\"> <label class=\"form-check-label\"> <input type=\"checkbox\" ng-model=\"demo.hazards[val[langDef]]\" class=\"form-check-input\"> {{val[lang]}} <em ng-if=\"lang != langDef\">({{val.English}})</em> </label> </div> <!--\n" +
    "  <div ng-repeat=\"key in demo.hazardNames | filter:demo.filter\" class=\"form-check\">\n" +
    "    <label class=\"form-check-label\">\n" +
    "      <input type=\"checkbox\" ng-model=\"demo.hazards[key]\" class=\"form-check-input\"/> {{key}}\n" +
    "    </label>\n" +
    "  </div>\n" +
    "  --> </div> <nav class=\"navbar navbar-default\" role=\"navigation\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> </div> <div class=\"navbar-collapse collapse\"> <ul class=\"nav navbar-nav navbar-left\"> <li><a href=\"#\" class=\"restart\" ng-click=\"$root.lang = $root.langDef\">{{textLang.restart[lang]}}</a></li> </ul> <ul class=\"nav navbar-nav navbar-right next\"> <li><a href=\"#!/demo/relief\" ng-click=\"setRootMult(demo.hazards, 'hazards')\">{{textLang.next[lang]}}</a></li> </ul> </div> </nav>"
  );


  $templateCache.put('views/demo_locations.html',
    "<div ng-controller=\"LanguageSelectionCtrl\"> Change Language? <select ng-init=\"\" ng-model=\"lang\" ng-options=\"option for option in languageOptions\" ng-change=\"setLang(lang)\"> </select> </div> <h2>{{demo.prompts.locations[lang]}}</h2> <div class=\"form-group\"> <label class=\"control-label\">Filter: <input ng-model=\"demo.filter\" class=\"form-control\"> </label> </div> <div class=\"pre-scrollable\"> <div ng-repeat=\"(key,val) in demo.locationNames | filter:demo.filter\" class=\"form-check\"> <label class=\"form-check-label\"> <input type=\"checkbox\" ng-model=\"demo.locations[val[langDef]]\" class=\"form-check-input\"> {{val[lang]}} <em ng-if=\"lang != langDef\">({{val.English}})</em> </label> </div> </div> <nav class=\"navbar navbar-default\" role=\"navigation\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> </div> <div class=\"navbar-collapse collapse\"> <ul class=\"nav navbar-nav navbar-left\"> <li><a href=\"#\" class=\"restart\" ng-click=\"$root.lang = $root.langDef\">{{textLang.restart[lang]}}</a></li> </ul> <ul class=\"nav navbar-nav navbar-right next\"> <li><a href=\"#!/demo/description\" ng-click=\"setRootMult(demo.locations, 'locations')\">{{textLang.next[lang]}}</a></li> </ul> </div> </nav>"
  );


  $templateCache.put('views/demo_medications.html',
    "<div ng-controller=\"LanguageSelectionCtrl\"> Change Language? <select ng-init=\"\" ng-model=\"lang\" ng-options=\"option for option in languageOptions\" ng-change=\"setLang(lang)\"> </select> </div> <h2>{{demo.prompts.medications[lang]}}</h2> <div class=\"form-group\"> <label class=\"control-label\">Filter: <input ng-model=\"demo.filter\" class=\"form-control\"> </label> </div> <div class=\"pre-scrollable\"> <div ng-repeat=\"key in demo.medicationNames | filter:demo.filter\" class=\"form-check\"> <label class=\"form-check-label\"> <input type=\"checkbox\" ng-model=\"demo.medications[key]\" class=\"form-check-input\"> {{key}} </label> </div> </div> <nav class=\"navbar navbar-default\" role=\"navigation\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> </div> <div class=\"navbar-collapse collapse\"> <ul class=\"nav navbar-nav navbar-left\"> <li><a href=\"#\" class=\"restart\" ng-click=\"$root.lang = $root.langDef\">{{textLang.restart[lang]}}</a></li> </ul> <ul class=\"nav navbar-nav navbar-right next\"> <li><a href=\"#!/demo/hazards\" ng-click=\"setRootMult(demo.medications, 'medications')\">{{textLang.next[lang]}}</a></li> </ul> </div> </nav>"
  );


  $templateCache.put('views/demo_onset.html',
    "<div ng-controller=\"LanguageSelectionCtrl\"> Change Language? <select ng-init=\"\" ng-model=\"lang\" ng-options=\"option for option in languageOptions\" ng-change=\"setLang(lang)\"> </select> </div> <h2>{{demo.prompts.onset[lang]}}</h2> <div class=\"row\"> <div class=\"form-group col-sm-4\"> <label for=\"year\" class=\"control-label\">{{demo.yearLang[lang]}}</label> <input type=\"text\" ng-model=\"demo.onset.year\" class=\"form-control\" id=\"year\" placeholder=\"{{demo.onset.yearPlaceholder}}\"> </div> <div class=\"form-group col-sm-4\"> <label for=\"month\" class=\"control-label\">{{demo.monthLang[lang]}}</label> <input type=\"text\" ng-model=\"demo.onset.month\" class=\"form-control\" id=\"month\" placeholder=\"{{demo.onset.monthPlaceholder}}\"> </div> <div class=\"form-group col-sm-4\"> <label for=\"day\" class=\"control-label\">{{demo.dayLang[lang]}}</label> <input type=\"text\" ng-model=\"demo.onset.day\" class=\"form-control\" id=\"day\" placeholder=\"{{demo.onset.dayPlaceholder}}\"> </div> </div> <nav class=\"navbar navbar-default\" role=\"navigation\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> </div> <div class=\"navbar-collapse collapse\"> <ul class=\"nav navbar-nav navbar-left\"> <li><a href=\"#\" class=\"restart\" ng-click=\"$root.lang = $root.langDef\">{{textLang.restart[lang]}}</a></li> </ul> <ul class=\"nav navbar-nav navbar-right next\"> <li><a href=\"#!/demo/allergies\">{{textLang.next[lang]}}</a></li> </ul> </div> </nav>"
  );


  $templateCache.put('views/demo_personal_info.html',
    "<h2>{{personal_info.prompt[lang]}}</h2> <div class=\"form\"> <div class=\"form row\"> <label for=\"firstName\" class=\"control-label\">{{personal_info.firstNameLang[lang]}}:</label> <input type=\"text\" ng-model=\"personal_info.firstName\" id=\"firstName\" class=\"form-control\" placeholder=\"{{personal_info.firstNameLang[lang]}}\" autofocus> </div> <div class=\"form row\"> <label for=\"lastName\" class=\"control-label\">{{personal_info.lastNameLang[lang]}}:</label> <input type=\"text\" ng-model=\"personal_info.lastName\" id=\"lastName\" class=\"form-control\" placeholder=\"{{personal_info.lastNameLang[lang]}}\"> </div> </div> <div class=\"form\"> <div class=\"form-group\"> <label for=\"address\" class=\"control-label\">{{personal_info.addressLang[lang]}}:</label> <input type=\"text\" ng-model=\"personal_info.address\" id=\"address\" class=\"form-control\" placeholder=\"{{personal_info.addressLang[lang]}}\"> </div> <div class=\"row\"> <div class=\"form-group col-sm-4\"> <label for=\"city\" class=\"control-label\">{{personal_info.cityLang[lang]}}:</label> <input type=\"text\" ng-model=\"personal_info.city\" id=\"city\" class=\"form-control\" placeholder=\"{{personal_info.cityLang[lang]}}\"> </div> <div class=\"form-group col-sm-4\"> <label for=\"state\" class=\"control-label\">{{personal_info.stateLang[lang]}}:</label> <input type=\"text\" ng-model=\"personal_info.state\" id=\"state\" class=\"form-control\" placeholder=\"{{personal_info.stateLang[lang]}}\"> </div> <div class=\"form-group col-sm-4\"> <label for=\"zip\" class=\"control-label\">{{personal_info.zipLang[lang]}}:</label> <input type=\"text\" ng-model=\"personal_info.zip\" id=\"zip\" class=\"form-control\" placeholder=\"{{personal_info.zipLang[lang]}}\"> </div> </div> <div class=\"form-group\"> <label for=\"phone\" class=\"control-label\">{{personal_info.phoneLang[lang]}}:</label> <input type=\"text\" ng-model=\"personal_info.phone\" id=\"phone\" class=\"form-control\" placeholder=\"(555) 123-4567\"> </div> </div> <nav class=\"navbar navbar-default\" role=\"navigation\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> </div> <div class=\"navbar-collapse collapse\"> <ul class=\"nav navbar-nav navbar-left\"> <li><a href=\"#\" class=\"restart\" ng-click=\"$root.lang = $root.langDef\">{{textLang.restart[lang]}}</a></li> </ul> <ul class=\"nav navbar-nav navbar-right next\"> <li><a href=\"#!/demo/symptoms\" ng-click=\"setLang(language_selection.language)\">{{textLang.next[lang]}}</a></li> </ul> </div> </nav>"
  );


  $templateCache.put('views/demo_relief.html',
    "<div ng-controller=\"LanguageSelectionCtrl\"> Change Language? <select ng-init=\"\" ng-model=\"lang\" ng-options=\"option for option in languageOptions\" ng-change=\"setLang(lang)\"> </select> </div> <h2>{{demo.prompts.reliefs[lang]}}</h2> <div class=\"form-group\"> <label class=\"control-label\">Filter: <input ng-model=\"demo.filter\" class=\"form-control\"> </label> </div> <div class=\"pre-scrollable\"> <div ng-repeat=\"(key,val) in demo.reliefNames | filter:demo.filter\" class=\"form-check\"> <label class=\"form-check-label\"> <input type=\"checkbox\" ng-model=\"demo.reliefs[val[langDef]]\" class=\"form-check-input\"> {{val[lang]}} <em ng-if=\"lang != langDef\">({{val.English}})</em> </label> </div> <!--\n" +
    "  <div ng-controller=\"DemoCtrl\" ng-repeat=\"key in demo.reliefNames | filter:demo.filter\" class=\"form-check\">\n" +
    "    <label class=\"form-check-label\">\n" +
    "      <input type=\"checkbox\" ng-model=\"demo.reliefs[key]\" class=\"form-check-input\"/> {{key}}\n" +
    "    </label>\n" +
    "  </div>\n" +
    "  --> </div> <nav class=\"navbar navbar-default\" role=\"navigation\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> </div> <div class=\"navbar-collapse collapse\"> <ul class=\"nav navbar-nav navbar-left\"> <li><a href=\"#\" class=\"restart\" ng-click=\"$root.lang = $root.langDef\">{{textLang.restart[lang]}}</a></li> </ul> <ul class=\"nav navbar-nav navbar-right next\"> <li><a href=\"#!/demo/end\" ng-click=\"setRootMult(demo.reliefs, 'reliefs')\">{{textLang.next[lang]}}</a></li> </ul> </div> </nav>"
  );


  $templateCache.put('views/demo_symptoms.html',
    "<div ng-controller=\"LanguageSelectionCtrl\"> Change Language? <select ng-init=\"\" ng-model=\"lang\" ng-options=\"option for option in languageOptions\" ng-change=\"setLang(lang)\"> </select> </div> <h2>{{demo.prompts.symptoms[lang]}}</h2> <!--\n" +
    "<ul ng-repeat=\"(key,val) in demo.reliefs\">\n" +
    "  <li>{{key}}={{val}}</li>\n" +
    "</ul>\n" +
    "--> <div class=\"form-group\"> <label class=\"control-label\">{{textLang.filter[lang]}}: <input ng-model=\"demo.filter\" class=\"form-control\"> </label> </div> <div class=\"pre-scrollable\"> <div ng-repeat=\"(key,val) in demo.symptomNames | filter:demo.filter\" class=\"form-check\"> <label class=\"form-check-label\"> <input type=\"checkbox\" ng-model=\"demo.symptoms[val[langDef]]\" class=\"form-check-input\"> {{val[lang]}} <em ng-if=\"lang != langDef\">({{val.English}})</em> </label> </div> </div> <nav class=\"navbar navbar-default\" role=\"navigation\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> </div> <div class=\"navbar-collapse collapse\"> <ul class=\"nav navbar-nav navbar-left\"> <li><a href=\"#\" class=\"restart\" ng-click=\"$root.lang = $root.langDef\">{{textLang.restart[lang]}}</a></li> </ul> <ul class=\"nav navbar-nav navbar-right next\"> <li><a href=\"#!/demo/locations\" ng-click=\"setRootMult(demo.symptoms, 'symptoms')\">{{textLang.next[lang]}}</a></li> </ul> </div> </nav>"
  );


  $templateCache.put('views/language_selection.html',
    "<div ng-repeat=\"key in language_selection.prompt\"> <h2>{{key}}</h2> </div> <div class=\"form-group\"> <select ng-init=\"language_selection.language = language_selection.languageOptions[0]\" ng-model=\"language_selection.language\" ng-options=\"option for option in language_selection.languageOptions\" ng-change=\"setLang(language_selection.language)\" class=\"form-control\"> </select> </div> <nav class=\"navbar navbar-default\" role=\"navigation\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> </div> <div class=\"navbar-collapse collapse\"> <ul class=\"nav navbar-nav navbar-left\"> <li><a href=\"#\" class=\"restart\" ng-click=\"$root.lang = $root.langDef\">{{textLang.restart[lang]}}</a></li> </ul> <ul class=\"nav navbar-nav navbar-right next\"> <li><a href=\"#!/demo/personal_information\" ng-click=\"setLang(language_selection.language)\">{{textLang.begin[lang]}}</a></li> </ul> </div> </nav>"
  );


  $templateCache.put('views/main.html',
    "<div> <h2> Welcome to Quality Care! </h2> </div> <nav class=\"navbar navbar-default\" role=\"navigation\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> </div> <div class=\"navbar-collapse collapse\"> <ul class=\"nav navbar-nav navbar-right next\"> <li> <a href=\"#!/language\"> {{}} <p ng-repeat=\"key in $root.textLang.languageSelection\">{{key}}</p> </a> </li> </ul> </div> </nav>"
  );


  $templateCache.put('views/privacy.html',
    "<h2> Privacy Statement </h2> Here at Quality Care, we take HIPPA / your privacy seriously..."
  );

}]);
