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
