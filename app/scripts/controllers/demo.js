'use strict';

angular.module('qualityCareApp')
  .controller('DemoCtrl', function ($scope, $rootScope) {
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

  });
