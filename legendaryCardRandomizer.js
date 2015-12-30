$(document).ready(function() {
var heroesArray = ['dominio', 'wolverine', 'colossus', 'forge', 'professor x', 'iron fist', 'ghost rider',
                  'blade', 'jean grey', 'iron man', 'spider man', 'deadpool', 'gambit', 'cyclops', 'nick fury',
                  'captain america', 'black widow', 'rogue', 'storm', 'thor', 'emma frost', 'hawk-eye',
                  'angel', 'bishop', 'cable', 'elektra', 'nightcrawler', 'punisher', 'daredevil',  'ice-man',
                  'hulk',];
var mastermindArray = ['Apocalypse', 'mephisto', 'kingpin', 'stryfe', 'mr sinister', 'dr doom', 'loki', 'magento',
                      'red skull', ];
var schemeArray = ['capture baby hope', 'detonate helicarrier', 'massive earthquake generator', 'organized crimewave',
                  'Save Humanity', 'Steal Weaponized Plutonium', 'Transform citizens into demons', 'X-cutioners song',
                  'The legacy Virus', 'Midtown Bank Robbery', 'Negative Zone Prison Breakout', 'Portals to the Dark Dimension',
                  'Replace Earth\'s Leaders with Killbots', 'Secret Invasion of the Skrull Shapeshifters',
                  'Super Hero Civil War', 'Unleash the Power of the Cosmic Cube'];

var heroesList = document.getElementsByClassName('heroList');

function shuffle(array) {
  for (var i = 0; i < array.length; i++) {
    var random = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[random];
    array[random] = temp;
  }
  return array;
}

function chooseOption(array) {
  return array.shift();
}

function chooseHeroes(array) {
  array = shuffle(array);
  for (var i = 0; i <= 4; i++) {
    $('.heroList').append('<li>' + array[i] + '</li>');
  }
  return array;
}

$('.heroes').on('click', function() {
  chooseOption(chooseHeroes(heroesArray));
});

});
